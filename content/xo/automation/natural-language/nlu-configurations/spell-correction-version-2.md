# Spell Correction – Version 2

The Spell Correction feature for the supported languages corrects the misspelled words in the user’s utterance based on the language.

Version 10.1.19 of the Platform includes a new version of the Spell Correction (Version 2) for English, French and Dutch that comes with the following advantages:

* **Consistent Spell Correction Experience**: The spell correction is performed at a central place immediately after identifying the conversation language, unlike the previous version, where spell correction used to happen separately at each NLP engine. This makes the Spell Correction experience consistent across languages.
* **Enhanced Accuracy**: It checks words against comprehensive dictionaries and uses edit distance to find and rank possible corrections based on their commonness in the dictionary.


## Configurations to Manage Spell Correction

To manage spell correction effectively, two new language-specific settings are introduced in the **Advanced NLP Configurations**; these settings are not added and are disabled by default:  

* **Spell Correction Version**: Choose this configuration from the drop-down, and then choose the version.  
* **Spell Correction Status**: Choose this configuration from the drop-down, and then toggle the status to ‘Enabled’.

    <img src="../images/existing-bot-without-spell-correction-enabled.png" alt="Manage Spell Correction V2" title="Manage Spell Correction V2" style="border:1px solid gray; zoom:60%;">

When the settings is enabled, the spell correction will happen immediately after the language detection step. The spell-corrected input is used by all the engines for further processing.

Also, once V2 is enabled, the following old spell correction-specific settings are removed:

* **Auto-Correction** setting in Knowledge Graph.
* **ML_Spell_Correction** custom flag in Advanced NLP Configurations.


### Impact on New and Existing Bots

* **For the new bots and the existing bots in which spell correction is not enabled** in configured or published copy for both ML and KG engines, only Spell Correction V2 is supported. (Choose the configurations and enable the setting as explained in the previous section.)
* **For all the existing bots in which the spell correction is enabled** in either configured or published copy in either of ML or KG engine, both the Spell Correction versions are supported. The Platform displays an **upgrade banner** on the **NLU Config** screen. You can initiate the upgrade from the banner, and the Platform will automatically configure and enable the required settings.

    <img src="../images/upgrade-spell-version-banner.png" alt="Spell Correction Version Upgrade banner" title="Spell Correction Version Upgrade banner"  style="border:1px solid gray; zoom:60%;">

    Alternatively, you can manually choose **Version 2** as the Spell Correction Version, as explained in the previous section. You can also downgrade the spell correction version by selecting **Version 1** as the Spell Correction Version, and the Platform will automatically take care of the configurations and settings.