


# Generating DKIM keys using OpenSSL

**Prerequisites**


**OpenSSL**: You need OpenSSL installed on your system (Linux, macOS, or Windows with Git Bash or a similar terminal). Most Linux distributions and macOS include OpenSSL by default.


### Steps to Generate DKIM Keys


#### 1. Generate the RSA Private Key

This command will create a private key file (`dkim_private.pem`) with the specified bit length (1024, 1536, or 2048 are common choices for DKIM, with 2048 being generally recommended for stronger security). The output will be in PEM format, which is Base64 encoded.

Bash

``` 

openssl genrsa -out dkim_private.pem 2048 

```


* `openssl genrsa`: This is the OpenSSL command for generating RSA private keys.
* `-out dkim_private.pem`: Specifies the output file name for your private key.
* `2048`: Specifies the key length in bits. You can change this to `1024` or any value up to `2048` as needed.

!!! Important

    Keep your `dkim_private.pem` file secure. This key should only be accessible by your mail server or the service responsible for signing your outgoing emails. Never share it publicly.


#### 2. Extract the Public Key from the Private Key

Once you have the private key, you can easily derive the corresponding public key from it.

Bash

``` 

openssl rsa -in dkim_private.pem -pubout -out dkim_public.pem

```


* `openssl rsa`: This OpenSSL command is used for RSA key processing.
* `-in dkim_private.pem`: Specifies the input private key file.
* `-pubout`: Tells OpenSSL to output the public key.
* `-out dkim_public.pem`: Specifies the output file name for your public key.

The `dkim_public.pem` file will also be in PEM format. The content will look something like this:

``` 

-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu...
... (long string of characters) ...
-----END PUBLIC KEY-----

```

#### 3. Format the Public Key for DNS (TXT Record)

The public key needs to be published in your domain's DNS as a TXT record. DNS TXT records have character limits, so you'll often need to remove the header and footer, as well as any line breaks, from the public key, and sometimes split it into multiple strings.

First, get the raw public key string:

Bash

```  
awk 'BEGIN{RS=" "}{printf "%s",/-----BEGIN PUBLIC KEY-----/?$0:($0~/-----END PUBLIC KEY-----/?"":$0)}' dkim_public.pem | tr -d '\n' | sed 's/-----BEGIN PUBLIC KEY-----//g' | sed 's/-----END PUBLIC KEY-----//g'

```

*Alternatively, you can manually open <code>dkim_public.pem</code> in a text editor and copy the long string between <code>-----BEGIN PUBLIC KEY-----</code> and <code>-----END PUBLIC KEY-----</code>.*

**Example of Public Key for DNS**

Let's say your extracted public key string (after removing headers/footers and newlines) is: `MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu...`

You'll create a DNS TXT record with a specific format. A common format looks like this:

**Hostname/Name**: `your_selector._domainkey.example.com` (Replace `your_selector` with a unique identifier, e.g., `default`, `mail`, `2025q3`. Replace `example.com` with your actual domain.)

**Value/Text**: `v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu...` (If the `p=` value is very long and exceeds the DNS TXT record limit, you may need to split it into multiple quoted strings within the same TXT record, like `p="string1""string2"`.)

**Example DNS TXT Record**

```  
Host: default._domainkey.example.com
Type: TXT
Value: "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu..."
```

**Explanation of DKIM DNS Record Tags**



* `v=DKIM1`: Indicates the DKIM version (currently 1).
* `k=rsa`: Specifies the key type (RSA in this case).
* `p=`: Contains the actual Base64 encoded public key. If the `p` value is empty, it means the key is revoked.
* `s=`: (Optional, but often included implicitly by the selector) Lists record-applicable service types.
* `h=`: (Optional) Defines acceptable hash algorithms.