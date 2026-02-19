# Sentiment chart and realtime sentiment handling

The Sentiment chart provides real-time updates on the sentiment of a conversation. It visually tracks the sentiment trend throughout the interaction and enabling better insights into user sentiment.

The Sentiment Chart helps agents and administrators:

- Monitor the tone and direction of conversations.
- Identify moments of dissatisfaction or positivity.
- Gain insights for better customer engagement and conversation outcomes.


<img src="../images/sentiment-chart.png" alt="web-sdk-channel" title="sentiment-chart" style="border: 1px solid gray; zoom:80%;"/> 

## Features

- **Realtime sentiment event handling**—These sentiments listen and processes real-time events. These sentiments are categorized into three types:
    - Positive
    - Neutral
    - Negative

- **Display sentiment in Assist Header**—These sentiments are displayed on top of the Assist header. Each sentiment is accompanied by a specific icon for easy recognition. These sentiments are also categorized into three types:
    - Positive
    - Neutral
    - Negative

- **Interactive sentiment chart**—These sentiments are displayed in the header, opens a line chart that displays how the sentiment is varied throughout the conversation, starting from the beginning to the current moment.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'SENTIMENT_POPUP_TEMPLATE'){
       	// Customize sentimen template if required
   	   }
});
```