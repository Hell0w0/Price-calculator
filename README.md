# Price calculator

This application calculates price based on different rules and values. The calculate uses:

- User type
    - There are two different user types:
        - Company, a company user
        - Normal, all users that are not a company user
- Product type
    - There are two product types:
        - New, a new product in the product line
        - Old, an existing product in the product line
- Price
- Published date

### Formula

The formula for the price calculation is:
Product price + product type price – rebate

### Additional prices

The additional product type prices are:

- New, +25 SEK
- Old, +35 SEK

### Rebate rules

- If the product is new and is published today you will receive 10 SEK in rebate
- If you are a company user you will receive 5 SEK in rebate

## Setup

Run the following commands to setup the project.

`$ npm install`
`$ npm run dev`
## Tests

To run the Unit test and end to end test run the following command:

`$ npm test`
