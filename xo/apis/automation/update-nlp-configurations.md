--8<-- "includes/automationai-api-back-link.md"

# Update NLP Configurations

To update the NLP thresholds and configurations.


<table>
  <tr>
   <td><strong>Method</strong>
   </td>
   <td>POST
   </td>
  </tr>
  <tr>
   <td><strong>Endpoint</strong>
   </td>
   <td><code>https://{{host}}/api/public/bot/{{BotID}}/configurations?language={{languageCode}}&groupName={{groupName}}</code>
   </td>
  </tr>
  <tr>
   <td><strong>Content Type</strong>
   </td>
   <td><code>application/json</code>
   </td>
  </tr>
  <tr>
   <td><strong>Authorization</strong>
   </td>
   <td><code>auth: {{JWT}}</code>
<p>
See <a href="../api-introduction/#generating-the-jwt-token">How to generate the JWT Token</a>.
   </td>
  </tr>
  <tr>
   <td><strong>API Scope</strong>
   </td>
   <td>
<ul>

<li>App Builder: NLP Configurations

<li>Admin Console: Test > NLP Configurations & Train
</li>
</ul>
   </td>
  </tr>
</table>

## Query Parameters


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>MANDATE</strong>
   </td>
  </tr>
  <tr>
   <td><strong>host</strong>
   </td>
   <td>The environment URL. For example, <code>https://platform.kore.ai</code>
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>BotID</strong>
   </td>
   <td>The <em>Bot ID</em> or <em>Stream ID</em> that can be accessed under <strong>General Settings</strong> on the App Builder.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>languageCode</strong>
   </td>
   <td>The Bot language in which the configurations need to be updated.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>groupName</strong>
   </td>
   <td>The <em>GroupName</em> can be used to update the ML parameters of a specific group.  To update Bot level Intent Model Configurations, <em>groupName</em> should be set to “<em>Bot Level Intent Model</em>“.
   </td>
   <td>Required
<p>
for Multiple ML Model
   </td>
  </tr>
</table>

## Sample Request


```json
curl --location -g --request POST 'https://{{host}}/api/public/bot/{{bot-id}}/configurations?language={{languageCode}}' \
  --header 'auth: YOUR_JWT_ACCESS_TOKEN' \
  --header 'content-type: application/json' \
  --data-raw '{
    "advancedNLPSettings": [
        {
            "configurationKeyName": "NoneIntent",
            "configurationValue": true,
            "nlpEngine": "ML"
        }
    ],
    "configurations": [
        {
            "mode": "ml",
            "exactMatchThreshold": 85,
            "useDependencyParser": true,
            "minThreshold": 0.2
        },
        {
            "mode": "faq",
            "useBotSynonyms": true,
            "searchInAnswer": {
                "enabled": true,
                "notifyUser": false,
                "responseType": "relevantWithReadMore",
                "customReadMoreURL": "aa",
                "useCustomReadMoreURL": true
            }
        }
    ],
    "mlParams": {
        "intentParams": {
            "features": "skip_gram",
            "skip_gram": {
                "seqLength": 3,
                "maxSkipDistance": 2
            }
        }
    },
    "nlSettings": {
        "enableAutoUtteranceAddition": false,
        "enableNegativePatterns": true
    }
}'
```



## Body Parameters

The parameters depend on the threshold configuration that needs to be updated. The comprehensive list of the parameters for the various threshold configurations is given below:

 


### Update Settings


#### Machine Learning Engine

This section refers to the configurations related to the Machine Learning engine. For details on the configurations, please click [here](../../automation/natural-language/training/machine-learning-engine.md).


```json
{
    "configurations": [
        {
            "mode": "ml",               // Machine Learning Engine
            "exactMatchThreshold": 90,  // ML Definitive Score - value in range [80-100]
            "minThreshold": 0.4        // ML threshold - value in range [0-1]
        }
    ],
    "mlParams": {
        "intentParams": {
            "useSynonyms": true,       // Bot Synonyms
            "useStopwords": true,      // Stopwords
            "usePlaceholders": true,   // Entity Placeholders
            "features": "skip_gram",       // Feature Extraction - value in range [skip_gram, n_gram]
            "skip_gram": {             // features should be 'skip_gram'
                "seqLength": 2,        // Sequence Length - value in range [2-4]
                "maxSkipDistance": 1   // Maximum Skip Distance - value in range [1-3]
              }               // ngram Sequence Length - value in range [1-4]
                                       // features should be 'n_gram'
        },
        "nerParams": {
            "type": "corenlp"          // NER Model
                                       // could be "corenlp" for  Conditional Random Field
                                       //       or "spacy" -  Deep Neural Network
         }
    }
}
```