# LLM Streaming

Contact Center supervisors can enable real-time streaming of LLM responses, reducing latency and enhancing the user experience, particularly for voice interactions.

Steps to enable LLM Streaming:

1. Go to **Contact Center AI** > **CONFIGURATIONS** > **Settings** > **Advanced Settings** > **LLM Streaming**.  
    <img src="../images/llm-streaming.png" alt="LLM Streaming" title="LLM Streaming" style="border: 1px solid gray; zoom:70%;">

2. Turn on the toggle to enable LLM streaming.

    !!! Note

        LLM Streaming is disabled by default.  
    <img src="../images/streaming-enabled.png" alt="Enable LLM Streaming" title="Enable LLM Streaming" style="border: 1px solid gray; zoom:70%;">

## Benefits of LLM Streaming

* **Reduced Latency:** Real-time streaming of rephrased responses significantly decreases the time taken for the user to receive the modified content.
* **Improved User Experience:** Faster delivery of rephrased content creates a more natural and interactive conversation flow.
* **Simplified Process:** Streamlining the rephrasing process reduces complexity and potential points of failure.

## LLM Streaming for Text-to-Speech (TTS) Providers

LLM  streaming is enabled for the following TTS providers:

1. ElevenLabs
2. Deepgram

!!! Note

    If a GenAI node's response contains special characters, such as punctuation marks, symbols, or brackets, the system might fail to play the prompt during a call, resulting in silence for the caller.