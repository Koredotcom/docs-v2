# Handling Sensitive Data

Sensitive data refers to any information or knowledge that, if disclosed or accessed by unauthorized parties, could lead to harm, privacy breaches, legal or financial consequences, or other negative impacts.

This type of information includes Personally Identifiable Information, Payment Card Industry, and Protected/Personal Health Information. Protecting sensitive data is crucial to safeguard individuals, organizations, and their stakeholders from potential risks and harm.

**Personally Identifiable Information (PII)**: PII refers to data that belongs to a specific person, and, when used alone or in connection with other data retained by an organization, can identify that person. For example: Social Security Number (SSN), Phone Number, Email Address, and Passport Information.

**Payment card Industry (PCI)**: PCI information includes PII, which is any data used during a payment card transaction. For example: Credit/Debit card Number, CVV/Security Code, Primary Account Number, and Card Expiry Date.

**Protected/Personal Health Information (PHI)**: PHI refers to any individually identifiable information related to an individual’s past, present, or future physical or mental health condition, healthcare services received, or payment for those services. For example, Medical History, Test/Lab Reports, Reports, Hospital Admission date, and Date of Discharge from the hospital.

## Redacting Sensitive Information on Contact Center AI

Any end-user input that matches the PII, PCI, or PHI pattern gets redacted in the context object, interactions, and anywhere it may be required.

Contact Center AI allows you to redact any sensitive information that customers share. When you enable redaction for sensitive information, you can transform its value into a pattern that doesn’t contain comprehensible data. [Learn more](./sensitive-data-masking.md).

PII Data that passes through Contact Center AI is managed as follows:

For chat conversations: In the response, the system tracks and identifies sensitive information and type of sensitivity (PII, PCI, PHI).

For audio conversations: In the response, the system tracks and identifies information and type of sensitivity (PII, PCI, PHI) in the transcription.

Example conversation from the customer sharing PII information:

```
Hello, my name is John Doe. I live at 123 Main Street, Anytown, USA. My phone number is 555-555-5555, and my email address is johndoe@example.com. My date of birth is January 1, 1980.
```

After masking the above example for sensitive information it appears as follows:

```
Hello, my name is **** ***. I live at *** **** **, ****, ***. My phone number is ***-***-****, and my email address is ********@***.com. My date of birth is ****** **, ****.
```