# Multilingual Support in SearchAI 

SearchAI offers multilingual capabilities to enhance accessibility and deliver a seamless experience for users interacting in different languages. This feature enables users to engage with the platform in their preferred language, resulting in more intuitive and personalized interactions. 

**Core Capabilities**

SearchAI's multilingual support enables you to:

* **Add and manage content** in multiple languages.
* **Submit queries and receive responses** in supported languages.
* **Get search results and answers** in the same language as the query

**Key Highlights:**

* 100+ Languages Supported for indexing, querying, and answer generation.
* Works with any language supported by your chosen LLM and vector generation model, using the Text Extraction strategy and Vector Retrieval method.
* No additional configuration required. 


## Commonly Supported Languages

SearchAI supports the languages commonly handled by advanced LLMs and embedding models like BGE-M3. The following are among the most widely supported and globally significant languages in terms of usage and application support:


<table>
  <tr>
   <td>English
   </td>
   <td>Spanish
   </td>
   <td>Arabic
   </td>
   <td>French
   </td>
   <td>Chinese
   </td>
  </tr>
  <tr>
   <td>Hindi
   </td>
   <td>Portuguese
   </td>
   <td>Russian
   </td>
   <td>Bengali
   </td>
   <td>Urdu
   </td>
  </tr>
  <tr>
   <td>Japanese
   </td>
   <td>German
   </td>
   <td>Turkish
   </td>
   <td>Korean
   </td>
   <td>Italian
   </td>
  </tr>
  <tr>
   <td>Vietnamese
   </td>
   <td>Persian
   </td>
   <td>Swahili
   </td>
   <td>Thai
   </td>
   <td>Malay
   </td>
  </tr>
  <tr>
   <td>Afrikaans
   </td>
   <td>Albanian
   </td>
   <td>Amharic
   </td>
   <td>Armenian
   </td>
   <td>Assamese
   </td>
  </tr>
  <tr>
   <td>Asturian
   </td>
   <td>Avaric
   </td>
   <td>Azerbaijani
   </td>
   <td>Bashkir
   </td>
   <td>Basque
   </td>
  </tr>
  <tr>
   <td>Bavarian
   </td>
   <td>Belarusian
   </td>
   <td>Bihari
   </td>
   <td>Bishnupriya
   </td>
   <td>Bosnian
   </td>
  </tr>
  <tr>
   <td>Breton
   </td>
   <td>Bulgarian
   </td>
   <td>Burmese
   </td>
   <td>Cantonese
   </td>
   <td>Catalan
   </td>
  </tr>
  <tr>
   <td>Central Bikol
   </td>
   <td>Central Kurdish
   </td>
   <td>Chavacano
   </td>
   <td>Chechen
   </td>
   <td>Cebuano
   </td>
  </tr>
  <tr>
   <td>Chuvash
   </td>
   <td>Cornish
   </td>
   <td>Corsican
   </td>
   <td>Croatian
   </td>
   <td>Danish
   </td>
  </tr>
  <tr>
   <td>Dhivehi
   </td>
   <td>Doteli
   </td>
   <td>Dutch
   </td>
   <td>Egyptian Arabic
   </td>
   <td>Emilian-Romagnol
   </td>
  </tr>
  <tr>
   <td>Erzya
   </td>
   <td>Esperanto
   </td>
   <td>Estonian
   </td>
   <td>Fiji Hindi
   </td>
   <td>Finnish
   </td>
  </tr>
  <tr>
   <td>Galician
   </td>
   <td>Georgian
   </td>
   <td>Goan Konkani
   </td>
   <td>Greek
   </td>
   <td>Gujarati
   </td>
  </tr>
  <tr>
   <td>Haitian Creole
   </td>
   <td>Hebrew
   </td>
   <td>Hill Mari
   </td>
   <td>Hungarian
   </td>
   <td>Ido
   </td>
  </tr>
  <tr>
   <td>Icelandic
   </td>
   <td>Ilocano
   </td>
   <td>Indonesian
   </td>
   <td>Interlingua
   </td>
   <td>Interlingue
   </td>
  </tr>
  <tr>
   <td>Irish
   </td>
   <td>Javanese
   </td>
   <td>Kannada
   </td>
   <td>Karachay-Balkar
   </td>
   <td>Kazakh
   </td>
  </tr>
  <tr>
   <td>Khmer
   </td>
   <td>Komi
   </td>
   <td>Kurdish
   </td>
   <td>Kyrgyz
   </td>
   <td>Lao
   </td>
  </tr>
  <tr>
   <td>Latin
   </td>
   <td>Latvian
   </td>
   <td>Lezghian
   </td>
   <td>Limburgish
   </td>
   <td>Lithuanian
   </td>
  </tr>
  <tr>
   <td>Lojban
   </td>
   <td>Lombard
   </td>
   <td>Low German
   </td>
   <td>Lower Sorbian
   </td>
   <td>Luxembourgish
   </td>
  </tr>
  <tr>
   <td>Macedonian
   </td>
   <td>Maithili
   </td>
   <td>Malagasy
   </td>
   <td>Malayalam
   </td>
   <td>Maltese
   </td>
  </tr>
  <tr>
   <td>Manx
   </td>
   <td>Marathi
   </td>
   <td>Mazanderani
   </td>
   <td>Meadow Mari
   </td>
   <td>Mingrelian
   </td>
  </tr>
</table>


*Refer to the official documentation of your LLM or vector generation model for a comprehensive list of supported languages.* 


## Language-Specific Configuration

While core multilingual support is comprehensive, certain modules within SearchAI are language-sensitive and require different strategies or models depending on the language used. The sections below provide support details for some of the most widely used languages by key components:

* **Extraction Strategies**
* **Vector Configuration Models**
* **Retrieval Strategies**
* **Answer Generation Models**

Use this guidance to ensure your multilingual setup is aligned with the most effective techniques for each language or model.


### Language-Specific Extraction Capabilities

The following table outlines the supported content extraction methods for widely used languages, enabling you to select the most effective approach for processing multilingual content.


<table>
  <tr>
   <td>
   </td>
   <td><strong>Language Support</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Text Extraction</strong>
   </td>
   <td>All languages listed above
   </td>
  </tr>
  <tr>
   <td><strong>Layout Aware Extraction</strong>
   </td>
   <td>English, Ukrainian
   </td>
  </tr>
  <tr>
   <td><strong>Image based Document Extraction</strong>
   </td>
   <td>English, Spanish, Italian, German, French
   </td>
  </tr>
  <tr>
   <td><strong>Advanced HTML Extraction</strong>
   </td>
   <td>English, Ukrainian, German
   </td>
  </tr>
  <tr>
   <td><strong>Markdown Extraction</strong>
   </td>
   <td>English, Ukrainian, Spanish, Russian, German, Hungarian, Chinese
   </td>
  </tr>
</table>



### Language-Specific Vector Generation Support

Vector generation model support varies by language. Use the following models for optimal performance:



* **English:** MPNet, E5, BGE-M3, LaBSE
* **Non-English Languages:** BGE-M3 and LaBSE 

Note: **BGE-M3** supports a wide range of languages. Their training data includes many commonly spoken languages; however, performance may be lower for low-resource or underrepresented languages.


### Language-Specific Retrieval Strategy Support

* **English**: Vector Retrieval and Hybrid Retrieval
* **Non-English**: Vector Retrieval


### Supported Answer Generation Models

Answer generation quality depends on the language capabilities of the underlying LLM. Please refer to the official list of supported languages from the LLM provider.


## Recommendations

To optimize multilingual performance:

* **Choose the right LLM** - Select models with strong support for your target languages. Refer to the official list of languages supported by the LLM.
* **Customize prompts** - Create language-specific prompts to improve answer quality and relevance. 
* **Test performance** - Evaluate different LLMs for your specific use case in your target language.
* **Monitor quality** - Regularly assess answer quality across languages and adjust configurations as needed.