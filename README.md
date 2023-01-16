# Simple Express server for testing the API and web socket

## Endpoints

### Hello World

`GET /api/v1`

### Return status code random duration

`GET /api/v1/:codes`
> random duration in [200, 2000,12000] ms

### Return status code with specified duration

`GET /api/v1/:codes/:duration`

## Web Socket

just return the message you send
