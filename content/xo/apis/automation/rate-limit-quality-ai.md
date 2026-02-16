# Quality AI - API Rate Limits 

Quality AI enforces rate limits to restrict the number of API requests an account/application can make within a timeframe. It helps prevent a single user or service from consuming disproportionate resources that could degrade the service for others.

Requests are monitored against a sixty-second limit. As long as the limit is not exceeded, the account/application can continue making requests.

When the rate limit is exceeded, subsequent requests will fail with the following error message:

“*You've exceeded the per-minute rate limit. Please wait for sometime before retrying*.”

## API Rate Limit Matrix

| **ENFORCEMENT LEVEL** | **RATE LIMIT**    | **API LIST** |
|------------------------|-------------------|------|
| account               | 60 per minute    | [Raw Data API](../quality-ai/raw-data-api.md) <br> [Auto QA Reporting API](../quality-ai/auto-qa-reporting-api.md)|


## Best Practices

* Spread out calls evenly to avoid traffic spikes.
* Use filters to limit the data response size and avoid calls that request overlapping data.
* When the limit has been reached, stop making API calls. Wait for the specific time period to pass. Alternatively, implement a backoff strategy where your application automatically reduces its request frequency and retries failed requests after a calculated delay.

Need a higher or custom rolling Rate Limit? [Contact support](https://support.kore.ai/).