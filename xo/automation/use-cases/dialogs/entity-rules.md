# Entity Rules

Validating user input before processing goes a long way in improving the AI Agent’s efficiency and user experience. While the entity type does impose some basic restrictions, these are not always sufficient and does not cater to the specific business requirements. **Entity rules** can be used for additional processing hints and validations.

Entity rules can be added from the **Entity Rules** section under **Instance Properties** of the corresponding entity. Add the rule in the JSON editor provided, [see here for how](./node-types/working-with-the-entity-node.md#instance-properties){:target="_blank"}.

These rules can also be set in the script for an entity, in such cases, the rule needs to be set before the entity prompt in the dialog flow. Add a script node at the beginning of the dialog or just before the concerned entity node with the following script:

```
context.entityRules.<entityName> = {
      "ruleName": "value"
   }
```


Subentity rules can be part of the composite entity rules:

```
context.entityRules.<compositeEntityName> = {
    <subentityName> : { 
      "ruleName": "value"
     }
   }
```


Below are the entity rules that can be entered in the JSON editor for the required entity or included as `ruleName` in the above script. We are continuously improving and updating this list. Any feedback or suggestions, kindly post in the [community forum](https://community.kore.ai/){:target="_blank"} and our developers will accommodate it, if feasible.


## Generic rules

<table border="1">
  <tr>
   <td><strong>RULENAME</strong>
   </td>
   <td><strong>VALUE</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td><strong>allowConfirmation</strong>
   </td>
   <td>true/false
   </td>
   <td>The extracted entity value is presented to the user after each input and the flow would continue only after confirmation from the user. Currently, this rule is applicable only for LoV enumerated entity types.
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
<br>
<code>{</code>
<br>
<code>"allowConfirmation": &lt;true/false></code>
<br>
<code>}</code>
   </td>
  </tr>
  <tr>
   <td><strong>confirmYesSynonyms</strong>
   </td>
   <td>&lt;concept names>
   </td>
   <td>Additional words/phrases to be used to confirm an entity value.
<br>
Used in conjunction with allowConfirmation rule mentioned above.
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
<br>
<code>{</code>
<br>
<code>"confirmYesSynonyms": ["~concept1", "~concept2"]</code>
<br>
<code>}</code>
<br>
where concept1: ok;
concept2: affirmative
   </td>
  </tr>
  <tr>
   <td><strong>confirmNoSynonyms</strong>
   </td>
   <td>&lt;concept names>
   </td>
   <td>Additional words/phrases to be used to cancel a confirmation entity. If selected/uttered, the entity value will be set to null
<br>
Used in conjunction with allowConfirmation rule mentioned above.
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
<br>
<code>{</code>
<br>
<code>"confirmNoSynonyms": ["~concept2", "~concept3"]</code>
<br>
<code>}</code>
<br>
where concept1: nope;
concept2: wrong
   </td>
  </tr>
  <tr>
   <td><strong>processLatestSentence</strong>
   </td>
   <td>true/false
   </td>
   <td>To restrict checking to the sentences only from the current volley.
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
<br>
<code>{</code>
<br>
<code> "processLatestSentence": &lt;true/false></code>
<br>
<code>}</code>
   </td>
  </tr>
  <tr>
   <td><strong>patternsOnly</strong>
   </td>
   <td>true/false
   </td>
   <td>To restrict matching to an entity pattern alone. By default, if the given entity patterns do not result in the extraction of entity value, the platform tries to find a value from user utterance. Setting this rule to true will disable that default processing.
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
<br>
<code>{</code>
<br>
<code>"patternsOnly": &lt;true/false></code>
<br>
<code>}</code>
   </td>
  </tr>
  <tr>
   <td><strong>preConditions</strong>
   </td>
   <td>user defined preconditions
   </td>
   <td>To define preconditions for all entity types to process entity extraction if one of the conditions is true. If the condition is invalid the entity extraction is skipped entirely.
<br>
<strong>Use Case Examples:</strong>
<ul>

<li><strong>Example1</strong>: A composite entity matches with a set of identification numbers, such as membership ID, provider ID, and RX number. You can set the precondition rule as <code>"preConditions" : ["checkMemberID"]</code>.

<li><strong>Example 2</strong>: An AI Agent has two static list of values (LOV) in a composite entity, you can add precondition to customer specific LOV to enable it.

<li><strong>Example 3</strong>: If you don’t want to extract entity values for simple utterances, then add preconditions to skip the extraction entirely.

<li><strong>Example 4</strong>: Add a precondition for each car make type to simplify the extraction of valid car models based on the car make. The car make can be a custom concept entity with an output tag based on the extracted entity value followed by a composite of individual LoVs for each model. Each list has a pre-condition corresponding to the make.

<br>
The pre-condition can be expressed as a context tag or trait (like an intent’s pre-condition) or when enclosed in parentheses, as a pattern. For example:
<br>
<code>"entityRules" : {</code>
<br>
<code>    "preConditions" : ["checkMemberID"]</code>
<br>
<code>}</code>
<br>
This will only extract an entity value when the current context has a checkMemberID context tag set or a trait with that name has been found.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{ </code>
<br>
<code>"preConditions": </code>
<br>
<code>[ "isCustomerX" ]</code>
<br>
<code>}</code>
   </td>
   <td><strong>Entity type</strong>: LoV Entity with Premium as one of the choices. But the list is only appropriate for Customer X.
<br>
A previous script node has set the “isCustomerX” context tag.
<br>
<strong>User Utterance</strong> “<em>check my premium account</em>”
<strong>Extracted Value</strong> “Premium”
<br>
A previous script node has not set the “isCustomerX” context tag.
<br>
<strong>User Utterance</strong> “<em>check my premium account</em>”
<strong>Extracted Value</strong> “none”
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{ </code>
<br>
<code>"preConditions" : </code>
<br>
<code>[ "( buy )" ]</code>
<br>
<code>}</code>
   </td>
   <td><strong>Entity type</strong>: Number Entity
<br>
<strong>User Utterance</strong> “<em>buy 10 apples</em>”
<strong>Extracted Value</strong> “10”
<br>
<strong>User Utterance</strong> “<em>search for 10 apples</em>”
<strong>Extracted Value</strong> “none”
   </td>
  </tr>
<tr>
   <td><strong>isCurrencyCode</strong>
   </td>
   <td>true/false
   </td>
   <td>This parameter determines currency code identification in multilingual setups — True enables identification, while False disables it.
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
<br>
<code>{</code>
<br>
<code>"isCurrencyCode": &lt;true/false></code>
<br>
<code>}</code>
   </td>
  </tr>
</table>


## String type entity

Works identical to the [Description entity type](#description-entity-type) but limited to one sentence.

There won’t be any validations done on the user utterance for string entities unless trained. Hence this entity type is used as a last resort when your requirement is not met with any of the platform supported entity types.

## Description entity type

<table border="1">
  <tr>
   <td><strong>RULENAME</strong>
   </td>
   <td><strong>VALUE</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td><strong>discardAsCommand</strong>
   </td>
   <td><strong>Concept Name:</strong> ~bot_commands_override_discard
<br>
<strong>Synonyms:</strong> abort, abort_all, cancel, clear_screen, discard, discard all, exit, exit_all, quit, quit_all, restart, start_over, startover, stop, stop_all
   </td>
   <td>If the rule is set to true, then the discard commands entered at a string entity node are not considered as valid string inputs, and the task gets discarded.
   </td>
  </tr>
  <tr>
   <td><strong>stripLeading</strong>
   </td>
   <td>&lt;concept name>
   </td>
   <td>To remove the words given in the concept from the start of the extracted string.
<br>
The concept can be a single concept name or a space-separated list of concepts or an array of concept names.
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{ "stripLeading": [ </code>
<br>
<code>      "~stringConcept" </code>
<br>
<code>    ]</code>
<br>
<code>}</code>
   </td>
   <td><strong>stringConcept: </strong> city
<br>
<strong>Entity Pattern:</strong> I like *
<br>
<strong>User Utterance</strong> “<em>I like city New York</em>”
<strong>Extracted Value</strong> New York
   </td>
  </tr>
  <tr>
   <td><strong>stripTrailing</strong>
   </td>
   <td>&lt;concept name>
   </td>
   <td>To remove words in a concept from the end of the extracted string.
<br>
The value can be a single concept name or a space-separated list of concepts or an array of concept names.
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{ "stripTrailing":</code>
<br>
<code>    "~stringConcept ~stringConcept1"</code>
<br>
<code> }</code>
   </td>
   <td><strong>stringConcept: </strong> city; <strong>stringConcept1: </strong> airport
<br>
<strong>Entity Pattern:</strong> I like *
<br>
<strong>User Utterance</strong> “<em>I like New York city</em>” or “<em>I like New York airport</em>”
<strong>Extracted Value</strong> New York
   </td>
  </tr>
  <tr>
   <td><strong>avoidSingleWord</strong>
   </td>
   <td>&lt;concept name>
   </td>
   <td>To ignore any value that is a member of the concept, unless it is the entire input.
<br>
The value can be a single concept name or a space-separated list of concepts or an array of concept names.
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>  "avoidSingleWord": </code>
<br>
<code>      "~stringConcept"</code>
<br>
<code>}</code>
   </td>
   <td><strong>stringConcept: </strong> chess, cricket
<br>
<strong>Entity Pattern:</strong> like to watch * tournament
<br>
<strong>User Utterance</strong> “<em>I like to watch chess tournament</em>”
<strong>Extracted Value</strong> prompt for entity value
<br>
<strong>User Utterance </strong>“<em>I like to watch golf tournament</em>”
<strong>Extracted Value</strong> golf
<br>
<strong>User Utterance</strong> “<em>cricket</em>”
<strong>Extracted Value</strong> cricket, since it is the entire input
   </td>
  </tr>
  <tr>
   <td><strong>avoidSingleVerb</strong>
   </td>
   <td>true
   </td>
   <td>If set to true, then any value that is just a verb is ignored, unless it is the entire input.
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>"avoidSingleVerb": true</code>
<br>
<code>}</code>
   </td>
   <td><strong>Entity Pattern:</strong> I like * music
<br>
<strong>User Utterance</strong> “<em>I like playing music</em>”
<strong>Extracted Value</strong> prompt for entity value
<br>
<strong>User Utterance</strong> “<em>I like rap music</em>”
<strong>Extracted Value</strong> rap
<br>
<strong>User Utterance</strong> “<em>play</em>”
<strong>Extracted Value</strong> play, since it is the entire input
   </td>
  </tr>
  <tr>
   <td><strong>extractOnlyNumbers</strong>
   </td>
   <td>true
   </td>
   <td>if true, the entity will extract only numbers present in the string and set it as the entity value
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>"extractOnlyNumbers": true</code>
<br>
<code>}</code>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td><strong>letters</strong>
   </td>
   <td>number
<br>
Or
<br>
range
   </td>
   <td>To extract a word of a specific length, or a sequence of individual characters that meet the length criteria.
<br>
The rule value is either:
<ul>

<li>A single number, <code>letters=3</code>, where the word(s) matched is composed of that many alphabetic (a-z) letters.

<li>A range, <code>letters=5-8</code>, indicates that 5, 6, 7, and 8 letters are valid.

<br>
Words or sequences of letters having only alphabets are matched. The words containing punctuation or numbers are not considered. Also, the return value is converted to all caps.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{ </code>
<br>
<code>"letters": 2 </code>
<br>
<code>}</code>
   </td>
   <td><strong>Entity Pattern</strong> – <em>“letters = 2″</em>
<br>
<strong>User Utterance</strong> 234 XY
<strong>Extracted Value</strong> “<em>XY</em>
<br>
<strong>User Utterance</strong> 234 x y
<strong>Extracted Value</strong> “<em>XY</em>
<br>
<strong>User Utterance</strong> 234 alpha bravo
<strong>Extracted Value</strong> “<em>AB
</em>This value is extracted as part of a phonetic alphabet.
<strong>User Utterance</strong> 234 X Y Z
<strong>Extracted Value</strong> “<em>Nothing
</em>No alphabet matches with letters value defined.
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{ </code>
<br>
<code>"letters": 5-8 </code>
<br>
<code>}</code>
   </td>
   <td><strong>Entity Pattern</strong> – <em>“letters = 5-8″</em>
<br>
<strong>User Utterance</strong> Kore.ai is the best platform in artificial intelligence of recent times.
<strong>Extracted Value</strong> “<em>platform, recent, times</em>
   </td>
  </tr>
</table>



## Number type entity


<table border="1">
  <tr>
   <td><strong>RULENAME</strong>
   </td>
   <td><strong>VALUE</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td><strong>asString</strong>
   </td>
   <td>true
   </td>
   <td>To capture a number as a string, preserving leading zeros
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>  "asString": true</code>
<br>
<code>}</code>
   </td>
   <td><strong>Entity Pattern</strong> – by default numeric entries
<br>
<strong>User Utterance</strong> “OTP is <em>009944</em>”
<strong>Extracted Value</strong> “<em>009944″
</em>without the rule, it would have been <em>“9944”</em>
   </td>
  </tr>
  <tr>
   <td><strong>digits</strong>
   </td>
   <td>single number
<br>
Or
<br>
a range of values
   </td>
   <td>To enforce a number of digits to match in a Number entity. This rule will not ignore leading zeros. The word(s) matched are composed of that many digits after NL processing. When a range is provided for the rule, it passes only if the utterance value matches within that valid range
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>  "digits": "3"</code>
<br>
<code>}</code>
   </td>
   <td><strong>Entity Pattern</strong> – Numeric or string entries
<br>
<strong>User Utterance</strong> “CVV is <em>034</em>”
<strong>Extracted Value</strong> “<em>034″
</em>The value is a match as the digits = 3. If the value of the digits is 2, then it would be a no match in this example.
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>  "digits": "13-17"</code>
<br>
<code>}</code>
   </td>
   <td><strong>Entity Pattern</strong> – Numeric or string entries
<br>
<strong>User Utterance</strong> “My credit card number is 4012 8888 8888 1881″
<strong>Extracted Value</strong> “<em>4012 8888 8888 1881″
</em>It is a match as the number of digits in the credit card number is 16, and within the range.
   </td>
  </tr>
</table>


!!! Note

    The presence of the digits rule is an implicit asString=true and integerOnly=true, which means the entity value is always returned as a string even if the number is short and does not have a leading zero. Floating point/decimal numbers and ordinals (For example, "first", "twenty-third") are not matched.  
    The rule does not split a word or number. For example, if the utterance is "two thousand and twenty three" and the rule is "digits": 3, then it is a no match. The utterance "twenty twenty three" would also be a no match. The rule should be "digits": 4 for all the inputs to match.


## Currency type entity


<table border="1">
  <tr>
   <td><strong>RULENAME</strong>
   </td>
   <td><strong>VALUE</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td><strong>defaultCode</strong>
   </td>
   <td>&lt;currency code>
<br>
or
<br>
&lt;country code>
   </td>
   <td>If no code is mentioned in user input, this value will be picked as code.
<br>
The value needs to be a 3 letter currency code or two-letter country alpha-2 codes.
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>  "defaultCode": "NZD"</code>
<br>
<code>}</code>
   </td>
   <td><strong>Entity Pattern </strong>pay *
<br>
<strong>User Utterance </strong>“<em>Pay 30</em>”
<strong>Extracted Value</strong> “<em>NZD30</em>”
<br>
<strong>User Utterance </strong>“<em>Pay USD30</em>”
<strong>Extracted Value</strong> “<em>USD30</em>“
   </td>
  </tr>
  <tr>
   <td><strong>maxDigits</strong>
   </td>
   <td>&lt;number>
   </td>
   <td>To restrict the amount length. If the amount length exceeds the value it will be discarded.
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{   </code>
<br>
<code>    "maxDigits": 3 </code>
<br>
<code>}</code>
   </td>
   <td><strong>Entity Pattern </strong>pay *
<br>
<strong>User Utterance </strong>“<em>Pay USD30</em>”
<strong>Extracted Value</strong> “<em>USD30</em>”
<br>
<strong>User Utterance </strong>“<em>Pay USD3000</em>”
<strong>Extracted Value</strong> prompt for value
   </td>
  </tr>
  <tr>
   <td><strong>currencyCodes</strong>
   </td>
   <td>[&lt;currency code>,&lt;currency code>]
<br>
or
<br>
[&lt;country code>,&lt;country code>]
   </td>
   <td>To restrict the currency codes. If the user entered code is not in the given list then the value will be discarded.
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>  "currencyCodes": [</code>
<br>
<code>    "USD",</code>
<br>
<code>    "INR",</code>
<br>
<code>    "NZD"</code>
<br>
<code>  ]</code>
<br>
<code>}</code>
   </td>
   <td><strong>Entity Pattern </strong>pay *
<br>
<strong>User Utterance </strong>“<em>Pay USD30</em>”
<strong>Extracted Value</strong> “<em>USD30</em>”
<br>
<strong>User Utterance </strong>“<em>Pay AUD30</em>”
<strong>Extracted Value</strong> prompt for a value
   </td>
  </tr>
  <tr>
   <td><strong>ignoreOnlyCode</strong>
   </td>
   <td>&lt;true/false>
   </td>
   <td>If the value is true, the currency entity requires both the currency code/symbol AND the amount. Otherwise, the entered value is unaccepted, resulting in an error message displayed to the user.
<br>
If the value is false, the currency entity accepts the currency code or symbol even without the amount.
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>  "ignoreOnlyCode": true  </code>
<br>
<code>}</code>
   </td>
   <td>In a scenario where the rule is set to true:
<br>
<strong>Entity Pattern </strong>pay *
<br>
<strong>User Utterance </strong>“<em>Pay USD30</em>”
<strong>Extracted Value</strong> “<em>USD30</em>”
<br>
<strong>User Utterance </strong>“<em>Pay AUD</em>”
<strong>AI Agent Response</strong>: I apologize, I did not recognize the currency you entered. Please enter the currency you would like to use. An example of currency is $ 100.
   </td>
  </tr>
</table>



## Model Number for Composite entity type


<table border="1">
  <tr>
   <td><strong>RULENAME</strong>
   </td>
   <td><strong>VALUE</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td><strong>modelNumber</strong>
   </td>
   <td>&lt;true>
<br>
or
<br>
&lt;a character>
   </td>
   <td>To capture a model number that is composed of letters and numbers such as membership number, social security number, country of origin code, and other ticket numbers.
<br>
The rule is especially useful to capture structured data on a voice channel where a custom regex pattern is not flexible or is too cumbersome to account for every variation.
<br>
For example:
<ul>

<li>“My id is six twenty seven dash forty four eighty nine

<li>“My seat is 20 3 sea”

<li>“The account number is alpha bravo slash six two one oh seven”

<li>“I was in row 35 seat d”

<br>
Each part of the structured data is a subentity, and the composite entity patterns define the order of those elements. The modelNumber rule means that the value stored in context.entities will be a concatenated string of the matched subentities instead of a JSON object.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>  "modelNumber": true</code>
<br>
<code>}</code>
   </td>
   <td><strong>Entity Pattern </strong>– @AccountNumbers @AccountSuffix
<br>
@AccountNumbers is a Number entity with “digits”:8 entity rule.
<br>
@AccountSuffix is a String entity with “letters”:2 entity rule<strong>User Utterance </strong>“<em>“Account Number is 3 3 1 3 4 2 1 2 X Y”</em>
<br>
<strong>Extracted Value</strong> “<em>“33 13 42 12 X Y”<strong>User Utterance </strong></em>“<em>“Account Number is 33134212 – XY”</em>”
<br>
<strong>Extracted Value</strong> “<em>“33134212XY”</em>“<strong>User Utterance </strong>“<em>“Account Number is 33 13 42 12 alpha bravo”</em>
<br>
<strong><em>Extracted Value “ “33134212AB”“</em></strong>
<br>
<strong>User Utterance </strong>“<em>“Account Number is thirty three thirteen forty two twelve a like apple b as in boy”
<strong>Extracted Value</strong> “ “33134212AB””
<strong>Composite Patterns</strong> – {row} @RowNumber {seat} @Seat</em>
<br>
@RowNumber is a Number entity with “digits”:2 and “range”: {“from”:1,”to”,35} entity rules.
<br>
@Seat is a Custom concept entity using a concept ~seatletters ( A B C D E F )
<br>
<strong>User Utterance </strong>“<em>“I am sitting in 33 A”
<strong>Extracted Value</strong> “ “33A”“</em>
<br>
<strong>User Utterance </strong>“<em>““I am in row thirty three seat sea”
<strong>Extracted Value</strong> “ “33C”“</em>
   </td>
  </tr>
  <tr>
   <td><strong>composite number</strong>
   </td>
   <td>&lt;single number> or &lt;a range of values>
   </td>
   <td>To extract a composite number using the Letters and Number entities. This rule will extract a number composed of subgroups with a specific number of digits and number of letters. For example:
<ul>

<li>A provider ID could be 8 digits and 1 or 2 letters

<li>An SSN is 3 digits then 2 digits then 4 digits

<li>A Jira ticket is a project id plus a number.

<li>An airline seat is 1 or 2 digits and 1 letter (though not all 2 digits or all letters).
</li>
</ul>
   </td>
  </tr>
</table>


!!! Note

    A modelNumber composite entity is a voice-compatible replacement for a Custom regex entity.  
    A regex is a strict character-matching expression, the input must be an exact match that generally works on text-based channels though those expressions can become complicated when optional elements like punctuation are involved – users don't necessarily know if they have to provide them or not.  
    On voice channels, an ASR can (mis)transcribe speech, for example "C" becomes "sea" or "see". A user could pause so "23" becomes "20 3". The Number and String entity types, along with the digits and letters entity rules, can handle all of these variations.  
    The example above of ( @AccountNumbers @AccountSuffix ) can replace a regex liked{8}\-?[a-zA-Z]{2}


## PersonName type entity


<table border="1">
  <tr>
   <td><strong>RULENAME</strong>
   </td>
   <td><strong>VALUE</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td><strong>disablePatterns</strong>
   </td>
   <td>An array of person name patterns to ignore – currently supporting only “<em>possessive</em>“
   </td>
   <td>To disable patterns in extracting a person’s name when not applicable in specific scenarios.
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>  "disablePatterns": [</code>
<br>
<code>    "possessive"</code>
<br>
<code>  ]</code>
<br>
<code>}</code>
   </td>
   <td><strong>Entity Pattern </strong>– by default capitalized words
<br>
<strong>User Utterance </strong>“schedule Bob’s review at 9 am”
<strong>Extracted Value</strong> “<em>Bob</em>“
   </td>
  </tr>
  <tr>
   <td><strong>ignoreWords</strong>
   </td>
   <td>&lt;concept name>
   </td>
   <td>Words in the concept are not to be considered as names even when capitalized.
<br>
The concept name could be a space-separated list of concepts or an array of concepts.
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>  "ignoreWords": [</code>
<br>
<code>    "review",</code>
<br>
<code>    "~prepositionList"</code>
<br>
<code>  ]</code>
<br>
<code>}</code>
   </td>
   <td><strong>Entity Pattern</strong> – by definition capitalized words
<br>
<strong>User Utterance </strong>“meeting for Bob Review”
<strong>Extracted Value</strong> “<em>Bob</em>”
would have been “Bob Review” without the rule
   </td>
  </tr>
  <tr>
   <td><strong>negativePatterns</strong>
   </td>
   <td>array of patterns
   </td>
   <td>Person names can be general capitalized words, or a name can be used in a sense where it is not meant to be taken as a person.
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>  "negativePatterns": [</code>
<br>
<code>    "about *"</code>
<br>
<code>  ]</code>
<br>
<code>}</code>
   </td>
   <td><strong>Entity Pattern</strong> – by definition capitalized words
<br>
<strong>User Utterance </strong>“schedule a meeting about Philip with Fred”
<strong>Extracted Value</strong> “<em>Fred</em>”
would have been “Philip” without the rule
   </td>
  </tr>


  <tr>
   <td><strong>ignorePunctuation</strong>
   </td>
   <td>An array of punctuation to ignore in the person_name entity.
   </td>
   <td>To ignore punctuation in the person’s name entity, the following characters can be ignored: !”#$%&'()*+,-./:;<=>?@[\]^_`{|}~
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>  "ignorePunctuation": [</code>
<br>
<code>     "-", ","</code>
<br>
<code>  ]</code>
<br>
<code>}</code>
   </td>
   <td>This applies only to languages other than English, Spanish, German, and French.
   </td>
  </tr>
</table>



## Company type entity


<table border="1">
  <tr>
   <td><strong>RULENAME</strong>
   </td>
   <td><strong>VALUE</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td><strong>ignoreWords</strong>
   </td>
   <td>&lt;concept name>
   </td>
   <td>Words in the concept are not to be considered as companies even when capitalized.
<br>
The concept name could be a space-separated list of concepts or an array of concepts.
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>  "ignoreWords": [</code>
<br>
<code>    "atm"</code>
<br>
<code>  ]</code>
<br>
<code>}</code>
   </td>
   <td><strong>Entity Pattern</strong> – by definition capitalized words
<br>
<strong>User Utterance </strong>“find ATM”
<strong>Extracted Value</strong> none
would have been “ATM” (an Italian company) without the rule
   </td>
  </tr>
  <tr>
   <td><strong>negativePatterns</strong>
   </td>
   <td>An array of company name patterns to ignore
   </td>
   <td>To disable patterns in extracting a company name when not applicable in specific scenarios.
   </td>
  </tr>
</table>



## Date type entity


<table border="1">
  <tr>
   <td><strong>RULENAME</strong>
   </td>
   <td><strong>VALUE</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td><strong>range</strong>
   </td>
   <td>{ “from” : &lt;from-date>, “to” : &lt;to-date> }
   </td>
   <td>To extract dates only in the specified range. Either endpoint is optional.
<br>
Values can be a date, YYYY-MM-DD, or a keyword: today, tomorrow, yesterday. The dates are inclusive.
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>"range": {</code>
<br>
<code>   "from": "2020-01-01",</code>
<br>
<code>   "to": "today"</code>
<br>
<code>  }</code>
<br>
<code>}</code>
   </td>
   <td><strong>Entity Pattern </strong>– by default date patterns
<br>
<strong>User Utterance </strong>“show schedule for 2019-02-03”
<strong>Extracted Value</strong> prompt for a value
<br>
<strong>User Utterance </strong>“show schedule for tomorrow”
<strong>Extracted Value</strong> prompt for a value
<br>
<strong>User Utterance </strong>“show schedule  for 2020-02-03”
<strong>Extracted Value</strong> “2020-02-03”
   </td>
  </tr>
  <tr>
   <td><strong>referenceDate</strong>
   </td>
   <td>&lt;date>
   </td>
   <td>Sets the reference date to &lt;date> and any date calculation to set the current date entity value is based on that date.
<br>
Values should be a date, YYYY-MM-DD, or a keyword: today, tomorrow, yesterday.
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>  "referenceDate": "2020-07-09"</code>
<br>
<code>}</code>
   </td>
   <td><strong>Entity Pattern </strong>– by default date patterns
<br>
<strong>User Utterance </strong>“schedule after two days”
<strong>Extracted Value</strong> “2020-07-11”
would have been two days from the current date without the reference date
   </td>
  </tr>
  <tr>
   <td><strong>preferredDateFormat</strong>
   </td>
   <td>“yyyy-mm-dd”
   </td>
   <td>In case of ambiguity in date, it uses the preferred date format to resolve ambiguity.
<br>
Values can be:
<ul>

<li>“yyyy-mm-dd”

<li>“yyyy-dd-mm”

<li>“dd-mm-yyyy”

<li>“mm-dd-yyyy”
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>  "preferredDateFormat": "mm-dd-yyyy"</code>
<br>
<code>}</code>
   </td>
   <td><strong>User Utterance </strong>“03-04-2021”
<br>
<strong>Extracted Value</strong> “2021-03-04”
<br>
NOTE: This rule only applies when there is an ambiguity in the user utterance. If the user’s preference is already set as part of a previous conversation, then the user selected format would take precedence over the defined rule
<br>
For example, a per the previous use case, if the user had selected the preferred format to be “dd-mm-yyy” previously in the conversation then the date would be taken as “2021-04-03”
   </td>
  </tr>
  <tr>
   <td><strong>returnOnlyMonthYear</strong>
   </td>
   <td>&lt;true/false>
   </td>
   <td>When set to true, the platform would capture the month and year alone from the user input and update the context object accordingly. Even if the user gives a full input (like 20 Oct 2019), the system would only take Oct 2019 from that input. The user will not be prompted for the date if not provided
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>  "returnOnlyMonthYear": true</code>
<br>
<code>}</code>
   </td>
   <td><strong>User Utterance </strong>“03-04-2021”
<br>
<strong>Extracted Value</strong> “04-2021”<strong>User Utterance </strong>“Apr 2021”
<br>
<strong>Extracted Value</strong> “04-2021”
   </td>
  </tr>
</table>



## Date Period type entity


<table border="1">
  <tr>
   <td><strong>RULENAME</strong>
   </td>
   <td><strong>VALUE</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td><strong>range</strong>
   </td>
   <td>{ “from” : &lt;from-date>, “to” : &lt;to-date> }
   </td>
   <td>To extract dates in the specified range. Either endpoint is optional.
<br>
Values can be a date, YYYY-MM-DD, or a keyword: today, tomorrow, yesterday. The dates are inclusive.
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>"range": {</code>
<br>
<code>   "from": "2020-01-01",</code>
<br>
<code>   "to": "today"</code>
<br>
<code>  }</code>
<br>
<code>}</code>
   </td>
   <td><strong>Entity Pattern </strong>– by default date patterns
<br>
<strong>User Utterance </strong>“show schedule for 2019-02-03”
<strong>Extracted Value</strong> prompt for a value
<br>
<strong>User Utterance </strong>“show schedule for tomorrow”
<strong>Extracted Value</strong> prompt for a value
<br>
<strong>User Utterance </strong>“show schedule  for 2020-02-03”
<strong>Extracted Value</strong> “2020-02-03”
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td><strong>range</strong> with <strong>strict</strong>
   </td>
   <td>{ “from” : &lt;from-date>, “to” : &lt;to-date>,
<br>
“strict”: &lt;true/false> }
   </td>
   <td>If the value is <em>true</em>, the Date Period entity accepts values that are strictly in the defined date range.
<br>
If the value is <em>false</em>, the Date Period entity accepts values that are in the range or overlapping with the range.
   </td>
   <td colspan="3" >Examples
   </td>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>"range": {</code>
<br>
<code>   "from": "2022-01-01",</code>
<br>
<code>   "to": "2023-03-05",</code>
<br>
<code>   "strict" = "true"</code>
<br>
<code>  }</code>
<br>
<code>}</code>
   </td>
   <td><strong>User Utterance</strong>: “2022-05-05 – 2022-06-05”
<br>
<strong>Expected Value</strong>: “Selected date range”
<br>
(The user utterance is within the defined date range. As strict is true, any value strictly in the defined date range is a valid input and is accepted.)<strong>User Utterance</strong>: “2021-05-05 – 2022-05-05”
<br>
<strong>Extracted Value</strong>: “I’m sorry, I am unable to recognize the string. Please enter again.”
<br>
(The user utterance is not strictly in the defined date range, it’s overlapping. As strict is true, any overlapping input is an invalid input and is rejected with an error.)
   </td>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>"range": {</code>
<br>
<code>   "from": "2022-01-01",</code>
<br>
<code>   "to": "2023-03-05",</code>
<br>
<code>   "strict" = "false"</code>
<br>
<code>  }</code>
<br>
<code>}</code>
   </td>
   <td><strong>User Utterance</strong>: “2021-05-05 – 2022-05-05”
<br>
<strong>Expected Value</strong>: “Selected date range”
<br>
(The user utterance is overlapping with the defined date range. As strict is false, any overlapping input is a valid input and is accepted.)
   </td>
   <td><strong>referenceDate</strong>
   </td>
   <td>&lt;date>
   </td>
   <td>Sets the reference date to &lt;date> and any date calculation to set the current date entity value is based on that date.
<br>
Values should be a date, YYYY-MM-DD, or a keyword: today, tomorrow, yesterday.
   </td>
   <td colspan="3" >Example
   </td>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>  "referenceDate": "2020-07-09"</code>
<br>
<code>}</code>
   </td>
   <td><strong>Entity Pattern </strong>– by default date patterns
<br>
<strong>User Utterance </strong>“schedule after two days”
<strong>Extracted Value</strong> “2020-07-11”
   </td>
   <td><strong>tense</strong>
   </td>
   <td>past/future
   </td>
   <td>To adjust the date period based on the tense when the year is not present in the user utterance.
<br>
Without this rule, the year is set as the current year if the month/day falls within 90 days from the current date else it would be set to the previous year. With this rule, you can force the year to current or past.
   </td>
   <td colspan="3" >Example
   </td>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code> "tense": "past"</code>
<br>
<code>}</code>
   </td>
   <td><strong>Entity Pattern </strong>– by default date patterns
<br>
<strong>User Utterance </strong>“get the statement for Jan”
<strong>Extracted Value</strong> “2020-01-01” if the current date is “2020-15-12”
without the rule, it would have been “2021-01-01”
<br>
<strong> </strong>
   </td>
   <td><strong>preferredDateFormat</strong>
   </td>
   <td>“yyyy-mm-dd”
   </td>
   <td>In case of ambiguity in date, it uses the preferred date format to resolve ambiguity.
<br>
Values can be:
<ul>

<li>“yyyy-mm-dd”

<li>“yyyy-dd-mm”

<li>“ddmmyyyy”

<li>“mmddyyyy”
</li>
</ul>
   </td>
   <td colspan="3" >Example
   </td>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>  "preferredDateFormat": "mm-dd-yyyy"</code>
<br>
<code>}</code>
   </td>
   <td><strong>User Utterance </strong>“03-04-2021”
<br>
<strong>Extracted Value</strong> “2021-03-04”
<br>
NOTE: This rule only applies when there is an ambiguity in the user utterance. If the user’s preference is already set as part of a previous conversation, then the user selected format would take precedence over the defined rule
<br>
For example, a per the previous use case, if the user had selected the preferred format to be “dd-mm-yyy” previously in the conversation then the date would be taken as “2021-04-03”
   </td>
  </tr>
</table>



## DateTime type entity


<table border="1">
  <tr>
   <td><strong>RULENAME</strong>
   </td>
   <td><strong>VALUE</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td><strong>range</strong>
   </td>
   <td>{ “from” : &lt;from-datetime>, “to” : &lt;to-datetime> }
   </td>
   <td>To extract date-times only in the specified range. Either endpoint is optional.
<br>
Values can be a date, YYYY-MM-DD, or a DateTime, YYYY-MM-DDTHH:MM:SS (user’s timezone is assumed if none specified) or a keyword: today, tomorrow, yesterday, now. The dates are inclusive.
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>  "range": {</code>
<br>
<code>    "from": "2020-01-01T00:00:00+05:30",</code>
<br>
<code>    "to": "2020-10-01T00:00:00+05:30"</code>
<br>
<code>  }</code>
<br>
<code>}</code>
   </td>
   <td><strong>Entity Pattern </strong>– by default date time patterns
<br>
<strong>User Utterance </strong>“set alarm for 2019-02-03T10:00:00”
<strong>Extracted Value</strong> prompt for a value
<br>
<strong>User Utterance </strong>“show schedule for 2021-12-20T10:00:00”
<strong>Extracted Value</strong> prompt for a value
<br>
<strong>User Utterance </strong>“show schedule  for 2020-02-03 T10:00:00”
<strong>Extracted Value</strong> “2020-02-03T10:00:00”
   </td>
  </tr>
  <tr>
   <td rowspan="3" ><strong>preferredTimes</strong>
   </td>
   <td>{ “from” : &lt;from-time>,
<br>
“to” : &lt;to-time> }
   </td>
   <td>To set the preferred time which can be used to interpret times when they are ambiguous. These times would be applicable to all days of the week.
<br>
For example, “3” will become “3 pm” if the preferredTimes are 9 am to 6 pm.
<br>
If the time cannot be placed inside the range then it will pick am/pm based on which is closest. If there are two possibilities or equal distance then the “daylight/standard awake” hours will be used. The times should be ISO 8601 format, THH:MM
   </td>
  </tr>
  <tr>
   <td>{ “from” : [],
<br>
“to” : [] }
   </td>
   <td>This option is for setting preferred times different for different days of the week. The “from” and “to” keys can be arrays with 7 members representing the time for each day, from Sunday to Saturday. Each value should be in the in Thh:MM format or an empty string to indicate there is no preference.
   </td>
  </tr>
  <tr>
   <td>{ “favor” : &lt;keyword> }
   </td>
   <td>The “favor” keyword can be used to set the preference in terms of “future”, “past”, “am”, or “pm”.
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>"preferredTimes": {</code>
<br>
<code>    "from": "T12:00:00",</code>
<br>
<code>    "to": "T18:00:00"</code>
<br>
<code>  }</code>
   </td>
   <td><strong>Entity Pattern </strong>– by default date patterns
<br>
<strong>User Utterance </strong>“remind me at 3”
<strong>Extracted Value</strong> “T15:00:00”
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>"preferredTimes": {</code>
<br>
<code>    "from": [</code>
<br>
<code>      "", "T09:00", </code>
<br>
<code>      "T09:00", "T21:00", </code>
<br>
<code>      "T21:00", "T07:00", ""</code>
<br>
<code>    ],</code>
<br>
<code>    "to": [</code>
<br>
<code>      "", "T18:00",</code>
<br>
<code>      "T18:00", "T06:00", </code>
<br>
<code>      "T06:00", "T16:00", ""</code>
<br>
<code>    ]</code>
<br>
<code>  }</code>
   </td>
   <td><strong>Entity Pattern </strong>– by default date patterns
<br>
<strong>User Utterance </strong>“remind me at 3”
<strong>Extracted Value</strong> “T15:00:00”, if the current day is Monday/Tuesday/Friday;
“T03:00:00”, if the current day is Wednesday/Thursday
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>"preferredTimes": {</code>
<br>
<code>    "favor": "pm"</code>
<br>
<code>  }</code>
   </td>
   <td><strong>Entity Pattern </strong>– by default date patterns
<br>
<strong>User Utterance </strong>“remind me at 3”
<strong>Extracted Value</strong> “T15:00:00”
   </td>
  </tr>
  <tr>
   <td><strong>timeRangePossible</strong>
   </td>
   <td>true/false
   </td>
   <td>If true then the dialog will be looking for time range in the user input.
<br>
Influences how “10 to 4” is interpreted. By default, this will be “3:50” but if there is the possibility of a range then will be decoded as 2 times “10:00” and “16:00”
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>"timeRangePossible": "true"</code>
<br>
<code>}</code>
   </td>
   <td> 
<br>
<strong> </strong>
   </td>
  </tr>
  <tr>
   <td><strong>preferredDateFormat</strong>
   </td>
   <td>“yyyy-mm-dd”
   </td>
   <td>In case of ambiguity in date, it uses the preferred date format to resolve ambiguity.
<br>
Values can be:
<ul>

<li>“yyyy-mm-dd”

<li>“yyyy-dd-mm”

<li>“ddmmyyyy”

<li>“mmddyyyy”
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>  "preferredDateFormat": "mm-dd-yyyy"</code>
<br>
<code>}</code>
   </td>
   <td><strong>User Utterance </strong>“03-04-2021”
<br>
<strong>Extracted Value</strong> “2021-03-04”
<br>
NOTE: This rule only applies when there is an ambiguity in the user utterance. If the user’s preference is already set as part of a previous conversation, then the user selected format would take precedence over the defined rule
<br>
For example, a per the previous use case, if the user had selected the preferred format to be “dd-mm-yyy” previously in the conversation then the date would be taken as “2021-04-03”
   </td>
  </tr>
</table>



## Time type entity


<table border="1">
  <tr>
   <td><strong>RULENAME</strong>
   </td>
   <td><strong>VALUE</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td rowspan="3" ><strong>preferredTimes</strong>
   </td>
   <td>{ “from” : &lt;from-time>,
<br>
“to” : &lt;to-time> }
   </td>
   <td>To set the preferred time which can be used to interpret times when they are ambiguous. These times would be applicable to all days of the week.
<br>
For example, “3” will become “3 pm” if the preferredTimes are 9 am to 6 pm.
<br>
If the time cannot be placed inside the range then it will pick am/pm based on which is closest. If there are two possibilities or equal distance then the “daylight/standard awake” hours will be used. The times should be ISO 8601 format, THH:MM
   </td>
  </tr>
  <tr>
   <td>{ “from” : [],
<br>
“to” : [] }
   </td>
   <td>This option is for setting preferred times different for different days of the week. The “from” and “to” keys can be arrays with 7 members representing the time for each day, from Sunday to Saturday. Each value should be in the in Thh:MM format or an empty string to indicate there is no preference.
   </td>
  </tr>
  <tr>
   <td>{ “favor” : &lt;keyword> }
   </td>
   <td>The “favor” keyword can be used to set the preference in terms of “future”, “past”, “am”, or “pm”.
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>"preferredTimes": {</code>
<br>
<code>    "from": "T12:00:00",</code>
<br>
<code>    "to": "T18:00:00"</code>
<br>
<code>  }</code>
   </td>
   <td><strong>Entity Pattern </strong>– by default date patterns
<br>
<strong>User Utterance </strong>“remind me at 3”
<strong>Extracted Value</strong> “T15:00:00”
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>"preferredTimes": {</code>
<br>
<code>    "from": [</code>
<br>
<code>      "", "T09:00", </code>
<br>
<code>      "T09:00", "T21:00", </code>
<br>
<code>      "T21:00", "T07:00", ""</code>
<br>
<code>    ],</code>
<br>
<code>    "to": [</code>
<br>
<code>      "", "T18:00",</code>
<br>
<code>      "T18:00", "T06:00", </code>
<br>
<code>      "T06:00", "T16:00", ""</code>
<br>
<code>    ]</code>
<br>
<code>  }</code>
   </td>
   <td><strong>Entity Pattern </strong>– by default date patterns
<br>
<strong>User Utterance </strong>“remind me at 3”
<strong>Extracted Value</strong> “T15:00:00”, if the current day is Monday/Tuesday/Friday;
“T03:00:00”, if the current day is Wednesday/Thursday
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>"preferredTimes": {</code>
<br>
<code>    "favor": "pm"</code>
<br>
<code>  }</code>
   </td>
   <td><strong>Entity Pattern </strong>– by default date patterns
<br>
<strong>User Utterance </strong>“remind me at 3”
<strong>Extracted Value</strong> “T15:00:00”
   </td>
  </tr>
  <tr>
   <td><strong>timeRangePossible</strong>
   </td>
   <td>true/false
   </td>
   <td>If true then the dialog will be looking for time range in the user input.
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
{
“timeRangePossible”: “true”
}
   </td>
   <td>Influences how utterances like “10 to 4” is interpreted. By default, this will be “3:50” but if there is the possibility of a range then will be decoded as 2 separate time values “10:00” and “16:00”
   </td>
  </tr>
  <tr>
   <td><strong>range</strong>
   </td>
   <td>{ “from” : “now”,
<br>
}
<br>
or
<br>
{ “to” : “now”
<br>
}
   </td>
   <td>To extract date-times only in the specified range. Either endpoint is optional.
<br>
Currently, support is extended to the value “now” alone
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>  "range": {</code>
<br>
<code>    "from": "now"</code>
<br>
<code>  }</code>
<br>
<code>}</code>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td><strong>timeOnly</strong>
   </td>
   <td>true/false
   </td>
   <td>Rule to include or exclude the character “T” and the offset value in the time.
<br>
Possible values are:
<ul>

<li><strong>True </strong>– Obtains only the time and excludes the character “T” and the offset value.

<li><strong>False </strong>– Obtains the time along with character T and the offset value.

<br>
<strong>Note</strong>: The timeOnly rule supports multilang excluding English, German, French and Spanish.
<br>
For example:
<ul>

<li>User Input: 6 pm

<li><strong>Result (with “timeOnly” rule): 18:00:00</strong>

<li>Result (without “timeOnly” rule): T18:00:00+5:50
</li>
</ul>
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>"timeOnly": "true"</code>
<br>
<code>}</code>
   </td>
   <td>
   </td>
  </tr>
</table>



## City type entity


<table border="1">
  <tr>
   <td><strong>RULENAME</strong>
   </td>
   <td><strong>VALUE</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td><strong>ignoreWords</strong>
   </td>
   <td>&lt;concept name>
   </td>
   <td>For the words in the concept not to be considered as cities.
<br>
The concept name could be a space-separated list of concepts or an array of concepts or space-separated strings.
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>  "ignoreWords": "Send"</code>
<br>
<code>}</code>
   </td>
   <td><strong>Entity Pattern </strong>– by default capitalized words
<br>
<strong>User Utterance </strong>“Send destination to my email”
<strong>Extracted Value</strong> prompt for entity value, without the rule it would have been “Send” since it is a city name
   </td>
  </tr>
</table>



## Zip Code type entity


<table border="1">
  <tr>
   <td><strong>RULENAME</strong>
   </td>
   <td><strong>VALUE</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td><strong>preferredCountries</strong>
   </td>
   <td>[&lt;“country1”>,&lt;“country2”>,..]
   </td>
   <td>To restrict zip code from the given set of preferred countries along with the user location country and the gleaned countries from the input.
<br>
Need to add two-letter country alpha-2 codes in place of
&lt;“country1”>,&lt;“country2”>,…
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>  "preferredCountries": [</code>
<br>
<code>    "GB"</code>
<br>
<code>  ]</code>
<br>
<code>}</code>
   </td>
   <td><strong>Entity Pattern </strong>– by default zip code patterns
<br>
<strong>User Utterance </strong>“check delivery to <em>PO16 7GZ</em>”
<strong>Extracted Value</strong> “<em>PO16 7GZ</em>“, without the rule this might have been ignored if the user is not in the UK region
   </td>
  </tr>
</table>



## Location type entity


<table border="1">
  <tr>
   <td><strong>RULENAME</strong>
   </td>
   <td><strong>VALUE</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td><strong>preferredCountries</strong>
   </td>
   <td>[&lt;“country1”>,&lt;“country2”>,..]
   </td>
   <td>To restrict location from the given set of preferred countries along with the user location country and the gleaned countries from the input.
<br>
Need to add two-letter country alpha-2 codes in place of
&lt;“country1”>,&lt;“country2”>,…
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>  "preferredCountries": [</code>
<br>
<code>    "GB"</code>
<br>
<code>  ]</code>
<br>
<code>}</code>
   </td>
   <td>
   </td>
  </tr>
</table>



## List of Values (LoV) type entity


<table border="1">
  <tr>
   <td><strong>RULENAME</strong>
   </td>
   <td><strong>VALUE</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td><strong>ignoreLemmaWords</strong>
   </td>
   <td>true/
<br>
false
   </td>
   <td>If <code>ignoreLemmaWords</code> is true, lemmatization is not performed on the given user input in the LoV lookup entity to predict the output. If it is set to false, lemmatization is performed.
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>"ignoreLemmaWords": false</code>
<br>
<code>}</code>
<br>
<code>{</code>
<br>
<code>"ignoreLemmaWords": true</code>
<br>
<code>}</code>
   </td>
   <td><strong>Input Options</strong> – “ticket”, “tickets”.”
<br>
<strong>User Utterance</strong> “I need a ticket,” “I need tickets.”
<br>
<strong>Extracted Value</strong> When <strong><code>ignoreLemmaWords</code></strong> is set to false, the LoV entity extracts “ticket” for both the inputs – “ticket” and “tickets”.
When it is set to true, the entity extracts “ticket” only when the input contains “ticket”. For a different input like “tickets”, the app responds that it is not a valid option.
   </td>
  </tr>
  <tr>
   <td><strong>ignoreWords</strong>
   </td>
   <td>
   </td>
   <td>The rule for the list of values (LOV) entity type to extend support to ignore words defined in the stop words or ignore words list.
<br>
This rule helps to ignore words that are not part of every choice and if a particular word is either causing a specific match or an ambiguity. It assesses the common synonyms (common meaning present in more than one choice) and boost partial match score for same choice.
<br>
<strong>Syntax</strong>
<br>
<code>{</code>
<br>
<code>"ignoreWords": [</code>
<br>
<code>""</code>
<br>
<code>]</code>
<br>
<code>}</code>
<br>
<strong>Note</strong>: You can enter multiple synonyms as a comma-separated list of words to be ignored.
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>"ignoreWords": [</code>
<br>
<code>"~size"</code>
<br>
<code>]</code>
<br>
<code>}</code>
   </td>
   <td><strong>Input Options</strong> – “~extra large size t-shirt”, “~large size t-shirt”, “~medium size t-shirt”, “~short size t-shirt”. “~child t-shirt, “~ men t-shirt” “~women t-shirt”
<br>
<strong>User Utterance</strong> – “I need extra large size t-shirt”, “I need large size t-shirt.”, “I need medium size t-shirt” “I need t-shirt for men”
<br>
<strong>Extracted Value</strong> – When <strong>ignoreWords</strong> is set to <em>size</em>, the LoV entity ignores the word “size” in the user input.
   </td>
  </tr>
</table>



## List of Items (enum) type entity


<table border="1">
  <tr>
   <td><strong>RULENAME</strong>
   </td>
   <td><strong>VALUE</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td><strong>ownership</strong>
   </td>
   <td>include/
<br>
exclude
   </td>
   <td>To look for potential “ownership” phrasing, e.g. “is mine” to determine if a potential choice should be included or excluded from the entity value.
<br>
Examples of ownership phrases are “is mine”, “belongs to me”, etc.
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>  "ownership": "include"</code>
<br>
<code>}</code>
   </td>
   <td><strong>Input Options</strong> – Pick your item: “pen”, “watch”, “bottle”, “book”, “cap”
<br>
<strong>User Utterance</strong> “first two are mine”
<strong>Extracted Value</strong> [“pen”, “watch”]
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>  "ownership": "exclude"</code>
<br>
<code>}</code>
   </td>
   <td><strong>Input Options</strong> – Pick your item: “pen”, “watch”, “bottle”, “book”, “cap”
<br>
<strong>User Utterance</strong> “first two are mine”
<strong>Extracted Value</strong> [“bottle”, “book”, “cap”], since the rule is to exclude the ownership values.
   </td>
  </tr>
  <tr>
   <td><strong>includeWords</strong>
   </td>
   <td>&lt;concept name> or array of words
   </td>
   <td>The list of words that supplement to the ownership phrases.
<br>
The value can be an array of strings or a concept.To be used along with <em>ownership: include</em> rule
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>  "ownership": "include",</code>
<br>
<code>  "includeWords": "great"</code>
<br>
<code>}</code>
   </td>
   <td><strong>Input Options</strong> – Pick your item: “pen”, “watch”, “bottle”, “book”, “cap”
<br>
<strong>User Utterance</strong> “first two are mine”
<strong>Extracted Value</strong> [“pen”, “watch”]
<br>
<strong>User Utterance</strong> “first two are great”
<strong>Extracted Value</strong> [“pen”, “watch”]
   </td>
  </tr>
  <tr>
   <td><strong>excludeWords</strong>
   </td>
   <td>&lt;concept name> or array of words
   </td>
   <td>The list of words that can be used as non-ownership phrases.
<br>
The value can be an array of strings or a concept. To be used along with <em>ownership: exclude</em> rule
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>  "ownership": "exclude",</code>
<br>
<code>   "excludeWords": "~lovConcept"</code>
<br>
<code>}</code>
   </td>
   <td><strong>Input Options</strong> – Pick your item: “pen”, “watch”, “bottle”, “book”, “cap”
<br>
<strong>lovConcept</strong> – dubious<strong>User Utterance</strong> “first two are dubious”
<br>
<strong>Extracted Value</strong> [“bottle”, “book”, “cap”]
   </td>
  </tr>
  <tr>
   <td><strong>noIndexMatch</strong>
   </td>
   <td>true
   </td>
   <td>To disable the alphabet and number Index match, would not allow the user to select the items using an index.
   </td>
  </tr>
  <tr>
   <td colspan="3" >Example
   </td>
  </tr>
  <tr>
   <td colspan="2" >JSON
<br>
<code>{</code>
<br>
<code>  "noIndexMatch": "true"</code>
<br>
<code>}</code>
   </td>
   <td><strong>Input Options</strong> – Pick your item: “pen”, “watch”, “bottle”, “book”, “cap”
<br>
<strong>User Utterance</strong> a
<strong>Extracted Value</strong> prompt for input, without the rule it would have been [“pen”]
   </td>
  </tr>
</table>