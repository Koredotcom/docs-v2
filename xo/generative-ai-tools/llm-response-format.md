# LLM Response Format

The Chat Completions API uses the following response formats, which are identical for both OpenAI and Azure OpenAI.






## Tool Calling and Streaming Response


```json
data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[{"index":0,"delta":{"role":"assistant","content":null,"function_call":{"name":"submit_Leave_Request","arguments":""},"refusal":null},"logprobs":null,"finish_reason":null}],"usage":null}

data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[{"index":0,"delta":{"function_call":{"arguments":"{\""}},"logprobs":null,"finish_reason":null}],"usage":null}

data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[{"index":0,"delta":{"function_call":{"arguments":"employee"}},"logprobs":null,"finish_reason":null}],"usage":null}

data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[{"index":0,"delta":{"function_call":{"arguments":"_id"}},"logprobs":null,"finish_reason":null}],"usage":null}

data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[{"index":0,"delta":{"function_call":{"arguments":"\":\""}},"logprobs":null,"finish_reason":null}],"usage":null}

data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[{"index":0,"delta":{"function_call":{"arguments":"102"}},"logprobs":null,"finish_reason":null}],"usage":null}

data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[{"index":0,"delta":{"function_call":{"arguments":"89"}},"logprobs":null,"finish_reason":null}],"usage":null}

data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[{"index":0,"delta":{"function_call":{"arguments":"\",\""}},"logprobs":null,"finish_reason":null}],"usage":null}

data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[{"index":0,"delta":{"function_call":{"arguments":"start"}},"logprobs":null,"finish_reason":null}],"usage":null}

data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[{"index":0,"delta":{"function_call":{"arguments":"_date"}},"logprobs":null,"finish_reason":null}],"usage":null}

data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[{"index":0,"delta":{"function_call":{"arguments":"\":\""}},"logprobs":null,"finish_reason":null}],"usage":null}

data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[{"index":0,"delta":{"function_call":{"arguments":"10"}},"logprobs":null,"finish_reason":null}],"usage":null}

data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[{"index":0,"delta":{"function_call":{"arguments":"/"}},"logprobs":null,"finish_reason":null}],"usage":null}

data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[{"index":0,"delta":{"function_call":{"arguments":"10"}},"logprobs":null,"finish_reason":null}],"usage":null}

data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[{"index":0,"delta":{"function_call":{"arguments":"/"}},"logprobs":null,"finish_reason":null}],"usage":null}

data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[{"index":0,"delta":{"function_call":{"arguments":"202"}},"logprobs":null,"finish_reason":null}],"usage":null}

data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[{"index":0,"delta":{"function_call":{"arguments":"4"}},"logprobs":null,"finish_reason":null}],"usage":null}

data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[{"index":0,"delta":{"function_call":{"arguments":"\",\""}},"logprobs":null,"finish_reason":null}],"usage":null}

data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[{"index":0,"delta":{"function_call":{"arguments":"end"}},"logprobs":null,"finish_reason":null}],"usage":null}

data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[{"index":0,"delta":{"function_call":{"arguments":"_date"}},"logprobs":null,"finish_reason":null}],"usage":null}

data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[{"index":0,"delta":{"function_call":{"arguments":"\":\""}},"logprobs":null,"finish_reason":null}],"usage":null}

data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[{"index":0,"delta":{"function_call":{"arguments":"11"}},"logprobs":null,"finish_reason":null}],"usage":null}

data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[{"index":0,"delta":{"function_call":{"arguments":"/"}},"logprobs":null,"finish_reason":null}],"usage":null}

data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[{"index":0,"delta":{"function_call":{"arguments":"10"}},"logprobs":null,"finish_reason":null}],"usage":null}

data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[{"index":0,"delta":{"function_call":{"arguments":"/"}},"logprobs":null,"finish_reason":null}],"usage":null}

data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[{"index":0,"delta":{"function_call":{"arguments":"202"}},"logprobs":null,"finish_reason":null}],"usage":null}

data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[{"index":0,"delta":{"function_call":{"arguments":"4"}},"logprobs":null,"finish_reason":null}],"usage":null}

data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[{"index":0,"delta":{"function_call":{"arguments":"\",\""}},"logprobs":null,"finish_reason":null}],"usage":null}

data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[{"index":0,"delta":{"function_call":{"arguments":"leave"}},"logprobs":null,"finish_reason":null}],"usage":null}

data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[{"index":0,"delta":{"function_call":{"arguments":"_type"}},"logprobs":null,"finish_reason":null}],"usage":null}

data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[{"index":0,"delta":{"function_call":{"arguments":"\":\""}},"logprobs":null,"finish_reason":null}],"usage":null}

data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[{"index":0,"delta":{"function_call":{"arguments":"S"}},"logprobs":null,"finish_reason":null}],"usage":null}

data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[{"index":0,"delta":{"function_call":{"arguments":"ick"}},"logprobs":null,"finish_reason":null}],"usage":null}

data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[{"index":0,"delta":{"function_call":{"arguments":" Leave"}},"logprobs":null,"finish_reason":null}],"usage":null}

data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[{"index":0,"delta":{"function_call":{"arguments":"\"}"}},"logprobs":null,"finish_reason":null}],"usage":null}

data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[{"index":0,"delta":{},"logprobs":null,"finish_reason":"function_call"}],"usage":null}

data: {"id":"chatcmpl-AUvTWRuwCDIOINJf9oXmPSN2HTHTl","object":"chat.completion.chunk","created":1731934138,"model":"gpt-4o-2024-08-06","system_fingerprint":"fp_45cf54deae","choices":[],"usage":{"prompt_tokens":678,"completion_tokens":45,"total_tokens":723,"prompt_tokens_details":{"cached_tokens":0,"audio_tokens":0},"completion_tokens_details":{"reasoning_tokens":0,"audio_tokens":0,"accepted_prediction_tokens":0,"rejected_prediction_tokens":0}}}

data: [DONE]
```



## Tool Calling Response


```json
{
    "id": "chatcmpl-Cb3WPT8H0oAbzpSvVYvMZcFOsVxtV",
    "object": "chat.completion",
    "created": 1762947709,
    "model": "gpt-4o-2024-08-06",
    "choices": [
        {
            "index": 0,
            "message": {
                "role": "assistant",
                "content": null,
                "function_call": {
                    "name": "submit_Leave_Request",
                    "arguments": "{\"employee_id\":\"10289\",\"start_date\":\"10/10/2024\",\"end_date\":\"11/10/2024\",\"leave_type\":\"Sick Leave\"}"
                },
                "refusal": null,
                "annotations": []
            },
            "logprobs": null,
            "finish_reason": "function_call"
        }
    ],
    "usage": {
        "prompt_tokens": 678,
        "completion_tokens": 45,
        "total_tokens": 723,
        "prompt_tokens_details": {
            "cached_tokens": 0,
            "audio_tokens": 0
        },
        "completion_tokens_details": {
            "reasoning_tokens": 0,
            "audio_tokens": 0,
            "accepted_prediction_tokens": 0,
            "rejected_prediction_tokens": 0
        }
    },
    "service_tier": "default",
    "system_fingerprint": "fp_b1442291a8"
}
```



## Streaming Response


```json
data: {"id":"chatcmpl-Cb3TzZQiYCBuCTaaYF4Ys0BRtZxTo","object":"chat.completion.chunk","created":1762947559,"model":"gpt-4-0613","service_tier":"default","system_fingerprint":null,"choices":[{"index":0,"delta":{"role":"assistant","content":"","refusal":null},"logprobs":null,"finish_reason":null}],"usage":null,"obfuscation":""}

data: {"id":"chatcmpl-Cb3TzZQiYCBuCTaaYF4Ys0BRtZxTo","object":"chat.completion.chunk","created":1762947559,"model":"gpt-4-0613","service_tier":"default","system_fingerprint":null,"choices":[{"index":0,"delta":{"content":"\"C"},"logprobs":null,"finish_reason":null}],"usage":null,"obfuscation":"uDkAp8P7FzWBPiO"}

data: {"id":"chatcmpl-Cb3TzZQiYCBuCTaaYF4Ys0BRtZxTo","object":"chat.completion.chunk","created":1762947559,"model":"gpt-4-0613","service_tier":"default","system_fingerprint":null,"choices":[{"index":0,"delta":{"content":"rypto"},"logprobs":null,"finish_reason":null}],"usage":null,"obfuscation":"NTMSChOhQMEvT"}

data: {"id":"chatcmpl-Cb3TzZQiYCBuCTaaYF4Ys0BRtZxTo","object":"chat.completion.chunk","created":1762947559,"model":"gpt-4-0613","service_tier":"default","system_fingerprint":null,"choices":[{"index":0,"delta":{"content":" is"},"logprobs":null,"finish_reason":null}],"usage":null,"obfuscation":"RTQqvwAD3Ks3qfe"}

data: {"id":"chatcmpl-Cb3TzZQiYCBuCTaaYF4Ys0BRtZxTo","object":"chat.completion.chunk","created":1762947559,"model":"gpt-4-0613","service_tier":"default","system_fingerprint":null,"choices":[{"index":0,"delta":{"content":" digital"},"logprobs":null,"finish_reason":null}],"usage":null,"obfuscation":"Yk6g0QoFnt"}

data: {"id":"chatcmpl-Cb3TzZQiYCBuCTaaYF4Ys0BRtZxTo","object":"chat.completion.chunk","created":1762947559,"model":"gpt-4-0613","service_tier":"default","system_fingerprint":null,"choices":[{"index":0,"delta":{"content":" currency"},"logprobs":null,"finish_reason":null}],"usage":null,"obfuscation":"8XlIzHepq"}

data: {"id":"chatcmpl-Cb3TzZQiYCBuCTaaYF4Ys0BRtZxTo","object":"chat.completion.chunk","created":1762947559,"model":"gpt-4-0613","service_tier":"default","system_fingerprint":null,"choices":[{"index":0,"delta":{"content":","},"logprobs":null,"finish_reason":null}],"usage":null,"obfuscation":"g"}

data: {"id":"chatcmpl-Cb3TzZQiYCBuCTaaYF4Ys0BRtZxTo","object":"chat.completion.chunk","created":1762947559,"model":"gpt-4-0613","service_tier":"default","system_fingerprint":null,"choices":[{"index":0,"delta":{"content":" decentralized"},"logprobs":null,"finish_reason":null}],"usage":null,"obfuscation":"CTDG"}

data: {"id":"chatcmpl-Cb3TzZQiYCBuCTaaYF4Ys0BRtZxTo","object":"chat.completion.chunk","created":1762947559,"model":"gpt-4-0613","service_tier":"default","system_fingerprint":null,"choices":[{"index":0,"delta":{"content":","},"logprobs":null,"finish_reason":null}],"usage":null,"obfuscation":"3"}

data: {"id":"chatcmpl-Cb3TzZQiYCBuCTaaYF4Ys0BRtZxTo","object":"chat.completion.chunk","created":1762947559,"model":"gpt-4-0613","service_tier":"default","system_fingerprint":null,"choices":[{"index":0,"delta":{"content":" secure"},"logprobs":null,"finish_reason":null}],"usage":null,"obfuscation":"rpCmftRsmG5"}

data: {"id":"chatcmpl-Cb3TzZQiYCBuCTaaYF4Ys0BRtZxTo","object":"chat.completion.chunk","created":1762947559,"model":"gpt-4-0613","service_tier":"default","system_fingerprint":null,"choices":[{"index":0,"delta":{"content":","},"logprobs":null,"finish_reason":null}],"usage":null,"obfuscation":"m"}

data: {"id":"chatcmpl-Cb3TzZQiYCBuCTaaYF4Ys0BRtZxTo","object":"chat.completion.chunk","created":1762947559,"model":"gpt-4-0613","service_tier":"default","system_fingerprint":null,"choices":[{"index":0,"delta":{"content":" border"},"logprobs":null,"finish_reason":null}],"usage":null,"obfuscation":"tKiL4tZoeHn"}

data: {"id":"chatcmpl-Cb3TzZQiYCBuCTaaYF4Ys0BRtZxTo","object":"chat.completion.chunk","created":1762947559,"model":"gpt-4-0613","service_tier":"default","system_fingerprint":null,"choices":[{"index":0,"delta":{"content":"less"},"logprobs":null,"finish_reason":null}],"usage":null,"obfuscation":"xEIbVHA7q6R9SL"}

data: {"id":"chatcmpl-Cb3TzZQiYCBuCTaaYF4Ys0BRtZxTo","object":"chat.completion.chunk","created":1762947559,"model":"gpt-4-0613","service_tier":"default","system_fingerprint":null,"choices":[{"index":0,"delta":{"content":","},"logprobs":null,"finish_reason":null}],"usage":null,"obfuscation":"u"}

data: {"id":"chatcmpl-Cb3TzZQiYCBuCTaaYF4Ys0BRtZxTo","object":"chat.completion.chunk","created":1762947559,"model":"gpt-4-0613","service_tier":"default","system_fingerprint":null,"choices":[{"index":0,"delta":{"content":" and"},"logprobs":null,"finish_reason":null}],"usage":null,"obfuscation":"r7BrmOe12jbhZe"}

data: {"id":"chatcmpl-Cb3TzZQiYCBuCTaaYF4Ys0BRtZxTo","object":"chat.completion.chunk","created":1762947559,"model":"gpt-4-0613","service_tier":"default","system_fingerprint":null,"choices":[{"index":0,"delta":{"content":" internet"},"logprobs":null,"finish_reason":null}],"usage":null,"obfuscation":"GKoFwevE7"}

data: {"id":"chatcmpl-Cb3TzZQiYCBuCTaaYF4Ys0BRtZxTo","object":"chat.completion.chunk","created":1762947559,"model":"gpt-4-0613","service_tier":"default","system_fingerprint":null,"choices":[{"index":0,"delta":{"content":"-based"},"logprobs":null,"finish_reason":null}],"usage":null,"obfuscation":"QObk39HaUE9N"}

data: {"id":"chatcmpl-Cb3TzZQiYCBuCTaaYF4Ys0BRtZxTo","object":"chat.completion.chunk","created":1762947559,"model":"gpt-4-0613","service_tier":"default","system_fingerprint":null,"choices":[{"index":0,"delta":{"content":".\"\n"},"logprobs":null,"finish_reason":null}],"usage":null,"obfuscation":"AHqQ7yZpg0y2I"}

data: {"id":"chatcmpl-Cb3TzZQiYCBuCTaaYF4Ys0BRtZxTo","object":"chat.completion.chunk","created":1762947559,"model":"gpt-4-0613","service_tier":"default","system_fingerprint":null,"choices":[{"index":0,"delta":{},"logprobs":null,"finish_reason":"stop"}],"usage":null,"obfuscation":"14p9foXAzlgm"}

data: {"id":"chatcmpl-Cb3TzZQiYCBuCTaaYF4Ys0BRtZxTo","object":"chat.completion.chunk","created":1762947559,"model":"gpt-4-0613","service_tier":"default","system_fingerprint":null,"choices":[],"usage":{"prompt_tokens":29,"completion_tokens":17,"total_tokens":46,"prompt_tokens_details":{"cached_tokens":0,"audio_tokens":0},"completion_tokens_details":{"reasoning_tokens":0,"audio_tokens":0,"accepted_prediction_tokens":0,"rejected_prediction_tokens":0}},"obfuscation":"k"}

data: [DONE]
```



## Regular Response


```json
{
    "id": "chatcmpl-Cb3Xgzd6Lqjr30wFgQGqjUdQ5wyOj",
    "object": "chat.completion",
    "created": 1762947788,
    "model": "gpt-4-0613",
    "choices": [
        {
            "index": 0,
            "message": {
                "role": "assistant",
                "content": "Digital, decentralized, secure currency using blockchain for transactions' verification.",
                "refusal": null,
                "annotations": []
            },
            "logprobs": null,
            "finish_reason": "stop"
        }
    ],
    "usage": {
        "prompt_tokens": 29,
        "completion_tokens": 13,
        "total_tokens": 42,
        "prompt_tokens_details": {
            "cached_tokens": 0,
            "audio_tokens": 0
        },
        "completion_tokens_details": {
            "reasoning_tokens": 0,
            "audio_tokens": 0,
            "accepted_prediction_tokens": 0,
            "rejected_prediction_tokens": 0
        }
    },
    "service_tier": "default",
    "system_fingerprint": null
}
```

