# Entity Types

The **Entity Type** provides the NLP Interpreter with the expected type of data from a user utterance to enhance recognition and system performance.  The NLP interpreter extracts the entity from the user utterance. If the user does not enter a required entity, you can define an AI Agent Response node to prompt the user to provide the entity. For more information, refer to [Working with the Entity Node](./node-types/working-with-the-entity-node.md){:target="_blank"}.

You can also define entity rules to validate user input, [refer here for details](entity-rules.md){:target="_blank"}.

The following **Entity Types** are specified for an entity node.


<table border="1">
  <tr>
   <td><a href="#address">Address</a>
   </td>
   <td><a href="#composite">Composite</a>
   </td>
   <td><a href="#person-name">Person Name</a>
   </td>
  </tr>
  <tr>
   <td><a href="#airport">Airport</a>
   </td>
   <td><a href="#date">Date</a>
   </td>
   <td><a href="#percentage">Percentage</a>
   </td>
  </tr>
  <tr>
   <td><a href="#attachment-image-file">Attachment</a>
   </td>
   <td><a href="#date-period">Date Period</a>
   </td>
   <td><a href="#phone-number">Phone Number</a>
   </td>
  </tr>
  <tr>
   <td><a href="#email">Email</a>
   </td>
   <td><a href="#date-time">Date Time</a>
   </td>
   <td><a href="#quantity">Quantity</a>
   </td>
  </tr>
  <tr>
   <td><a href="#city">City</a>
   </td>
   <td><a href="#description">Description</a>
   </td>
   <td><a href="#string">String</a>
   </td>
  </tr>
  <tr>
   <td><a href="#country">Country</a>
   </td>
   <td><a href="#list-of-items-enumerated">List of Items (enumerated)</a>
   </td>
   <td><a href="#time">Time</a>
   </td>
  </tr>
  <tr>
   <td><a href="#company-name-or-organization-name">Company</a>
   </td>
   <td><a href="#list-of-items-lookup">List of items (lookup)</a>
   </td>
   <td><a href="#time-zone">Time Zone</a>
   </td>
  </tr>
  <tr>
   <td><a href="#color">Color</a>
   </td>
   <td><a href="#location">Location</a>
   </td>
   <td><a href="#url">URL</a>
   </td>
  </tr>
  <tr>
   <td><a href="#custom">Custom</a>
   </td>
   <td><a href="#number">Number</a>
   </td>
   <td><a href="#zip-code">Zip Code</a>
   </td>
  </tr>
  <tr>
   <td><a href="#currency">Currency</a>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
</table>



### Address

Captures addresses written in the standard US and Germany address formats. For example, 200 E Main ST Pheonix AZ USA 85123. The complete address is captured as a string: “200 E Main ST Pheonix AZ USA 85123.” In addition to this string, the Address entities like [City](#city), [Country](#country), and [Zip Code](#zip-code) also provide the full formatted address that has been captured.

```
"entities":
{
"AddressEntity": "200 E Main ST Pheonix AZ USA 85123"
}
```

For other country addresses, the platform captures strings that end with a recognizable city or country name.  
**Address Format:**
*Street Name, City (mandatory), Country (mandatory), Zip Code*

For more details, please refer to the [City entity.](#city)


### Airport

Captures airport details with the following inputs:

* City name
* Airport name
* IATA code
* ICAO
* Abbreviations of US cities.

Airport details are returned as a JSON entity with the elements shown below:

```
"AirportEntity":
  {"IATA": "LHR",
   "AirportName": "London Heathrow Airport",
   "City": "London",
   "ICAO": "EGLL",
  }
```

We use [https://github.com/opentraveldata/opentraveldata](https://github.com/opentraveldata/opentraveldata){:target="_blank"} for all the airport details.


<table border="1">
  <tr>
   <td><strong>INPUT</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>EXAMPLES</strong>
   </td>
  </tr>
  <tr>
   <td>City
<br>
name
   </td>
   <td>Identifies the airport name from the city name in the user utterance. If the city has multiple airports, shows the list of airports to choose from.
   </td>
   <td>Utterance: Flying to Los Angeles
<br>
Response: The airport you entered seems to be ambiguous. Tell me the option you would like to choose.
<br>
<em>&lt;Names of five airports in Los Angeles></em>
   </td>
  </tr>
  <tr>
   <td>Airport name
   </td>
   <td>Identifies the airport name from full airport name or partial name with the prominent keyword.
   </td>
   <td>Utterance: Flying to Heathrow
<br>
Captured: London Heathrow Airport with the necessary details in the AI Agent.
   </td>
  </tr>
  <tr>
   <td>IATA
   </td>
   <td>Identifies airport names by the International Air Transport Association (IATA) codes.
   </td>
   <td>Utterance: Flying to LHR
<br>
Captured: Details of the London Heathrow Airport
   </td>
  </tr>
  <tr>
   <td>ICAO
   </td>
   <td>Identifies International Civil Aviation Organization (ICAO) codes.
   </td>
   <td>Utterance: Flying to EGLL
<br>
Captured: Details of the London Heathrow Airport
   </td>
  </tr>
  <tr>
   <td>Abbreviations of cities
   </td>
   <td>Identifies city abbreviations that are listed in www.geonames.org
   </td>
   <td>Utterance: Flying to LA
<br>
Response: The airport you entered seems to be ambiguous. Tell me the option you would like to choose.
<br>
<em>&lt;Names of five airports in LA></em>
   </td>
  </tr>
</table>



### Attachment (Image / File)

The user can attach a file, image, or email up to 25 MB.

```
"entities":
{
"AttachmentEntity": "send"
}
```

!!! Note

    Currently, the attachment entity is supported only for the following channels – Facebook, Twitter, Web/Mobile, and Slack.


### City

The name of a city in an utterance such as _What is the temperature in New York_. The AI Agent captures any city name with over 5000 population in the form of a string. We use [www.geonames.org](https://www.geonames.org/){:target="_blank"} for all the city details.

!!! Note

    City names are not disambiguated currently but prioritized based on their population. So, if the user utterances consist of Portland, Portland OR ranks higher than Portland ME.

```
"entities":
{
"CityEntity": "New York"
}
```


### Country

Captures the name of a Country from user utterance such as _What is the capital of the United States of America_.

Country details are returned as a JSON entity with the elements shown below:

```
"CountryEntity": {
      "alpha3": "USA",
      "alpha2": "US",
      "localName": "United States of America",
      "shortName": "United States",
      "numericalCode": 840
}
```

See here for a complete list of countries [https://www.nationsonline.org/oneworld/country_code_list.htm](https://www.nationsonline.org/oneworld/country_code_list.htm){:target="_blank"}.


<table border="1">
  <tr>
   <td><strong>ELEMENT</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>EXAMPLES</strong>
   </td>
  </tr>
  <tr>
   <td>alpha3
   </td>
   <td>The three-letter code of the country
   </td>
   <td>USA, GBR, or IND
   </td>
  </tr>
  <tr>
   <td>alpha2
   </td>
   <td>The two-letter code for the country
   </td>
   <td>US, GB, or IN
   </td>
  </tr>
  <tr>
   <td>localName
   </td>
   <td>Name of the country
   </td>
   <td>United States of America, United Kingdom, or India
   </td>
  </tr>
  <tr>
   <td>shortName
   </td>
   <td>Short name
   </td>
   <td>United States, United Kingdom, or India
   </td>
  </tr>
  <tr>
   <td>numericalCode
   </td>
   <td>United Nations, used numerical code M49 for countries
   </td>
   <td>840, 826, or 356
   </td>
  </tr>
</table>

!!!Note
       
    Ensure inputs don't contain special characters like ampersands "&" or parentheses "()". Avoid spaces around hyphens “-“. Use commas or "and" to separate list items, as parentheses, spaces around hyphens, and ampersands may prevent proper multi-item identification.

### Company Name or Organization Name

Captures the name of a company from user utterances such as the _Nearest branch for Amazon_. The value for Company Name is returned (_Amazon_) as a string.

The company name corpus includes language-specific names. Variations of a company’s name like stock name, registered name, etc. are all mapped to a common name, thus ensuring that, for example, Amazon, Amazon.com, Amazon Inc are all recognized as a single company.

Apart from the supported companies, the AI Agent recognizes the words starting with a capital letter and followed by these suffixes as a company type: Inc, Incorporated, Corp, Corporation, Group, Ltd, Limited, Co, Company, LP, LLP, LLLP, LLC, PLLC.

```
"entities":
{
"OrganizationEntity": "amazon"
}
```

<details>
  <summary><b>List of Supported Company Names</b></summary>
  <br>ABN AMRO<br />
    Accor<br />
    Acer<br />
    Activision Blizzard (Activision Blizzard)<br />
    Acumen<br />
    Adidas<br />
    Aditi Technologies<br />
    Aditya Birla<br />
    Advanced Micro Devices (AMD)<br />
    Affiliated Computer Services<br />
    Ahold Delhaize<br />
    Air France-KLM<br />
    Airbus<br />
    Aitken Spence<br />
    AkzoNobel<br />
    Albertson’s<br />
    Albertsons<br />
    Alcatel-Lucent<br />
    Alfa Laval<br />
    Alliance Global<br />
    Allianz<br />
    AllState<br />
    Alstom<br />
    Altria<br />
    Amazon.com (Amazon)<br />
    American Express (AMEX)<br />
    American International Group (AIG)<br />
    American Savings<br />
    Andritz AG<br />
    AOL Time Warner (AOL Time Warner)<br />
    Aon<br />
    Apollo Tyres<br />
    Apple<br />
    Apple Computer<br />
    Arcor<br />
    Assicurazioni Generali<br />
    Associated Press<br />
    Asus<br />
    AT&amp;T<br />
    Atari<br />
    Avast Software<br />
    Avatar Reality<br />
    Avianca<br />
    AXA<br />
    Axiata<br />
    Axis Bank<br />
    Bacardi<br />
    Banco Bilbao Vizcaya Argentaria (BBVA)<br />
    Banco Santander<br />
    Bank of America (BOA)<br />
    Bank of Hawaii (BOH)<br />
    Bank of Montreal<br />
    Barclays<br />
    Barilla<br />
    Barnes and Noble<br />
    Barrick Gold<br />
    BASF<br />
    Baskin-Robbins<br />
    Bata<br />
    Bayer<br />
    Becton Dickinson<br />
    Berkshire Hathaway<br />
    Bic<br />
    BIDV<br />
    Billabong<br />
    Black &amp; Decker<br />
    Bloomingdale’s<br />
    BMW<br />
    BNP Paribas (BNP)<br />
    Boeing<br />
    Bombardier<br />
    Borders<br />
    Bouygues<br />
    BRAC<br />
    Bridgestone<br />
    British Airways (BA)<br />
    British Petroleum (BP)<br />
    Brookstone’s<br />
    Cadbury Schweppes<br />
    Canon<br />
    CapGemini<br />
    Capital One<br />
    Caterpillar<br />
    Celestica<br />
    Central Pacific Bank<br />
    Chevron<br />
    Cisco Systems (Cisco)<br />
    Citibank (Citi and Citigroup)<br />
    Coca-Cola (Coke)<br />
    Cognizant Technology Solutions<br />
    Comerica<br />
    Concentrix<br />
    ConocoPhillips (Conoco)<br />
    Costco<br />
    Countrywide<br />
    Creative Labs<br />
    Crédit Agricole (CA)<br />
    Credit Suisse<br />
    Cummins<br />
    CVS<br />
    Dabur<br />
    Daikin<br />
    Daimler AG<br />
    Dangote<br />
    Danish Refugee Council<br />
    Danone<br />
    Decathlon<br />
    Dell<br />
    Dell Computer (Dell)<br />
    Deloitte<br />
    Delta Air Lines (Delta)<br />
    Deutsche Bank<br />
    Deutsche Telekom<br />
    DHL<br />
    Dow Chemical<br />
    Dunkin’ Donuts<br />
    easyJet<br />
    EDF<br />
    Electrolux<br />
    Electronic Arts (EA)<br />
    Electronic Data Systems (EDS)<br />
    Embraer<br />
    EMC<br />
    Emerson Electric<br />
    Enel<br />
    Eni<br />
    Enron<br />
    Epson<br />
    Ericsson<br />
    Etisalat<br />
    Expedia<br />
    Exxon Mobil (Exxon Mobil)<br />
    ExxonMobil (Exxon Mobil)<br />
    EY<br />
    Faber-Castell<br />
    Facebook<br />
    Federal Express (FedEx)<br />
    Ferrero<br />
    Fiat<br />
    Ficosa<br />
    Finastra<br />
    FIS<br />
    FleetBoston<br />
    Foodland<br />
    Ford Motor Company (Ford)<br />
    FPT<br />
    France Télécom<br />
    Fujitsu<br />
    Gap<br />
    Gazprom<br />
    General Electric (GE)<br />
    General Motors (GM)<br />
    General Nutrition Center (GNC)<br />
    Generali<br />
    Gerdau<br />
    Gillette<br />
    Glaxo Smith Kline (Glaxo)<br />
    Google<br />
    Haier<br />
    Halliburton<br />
    Hawaiian Electric (HECO)<br />
    HCL Technologies<br />
    Hearst<br />
    Heineken<br />
    Hewlett Packard (HP)<br />
    Hewlett-Packard (HP)<br />
    Hilti<br />
    Hindustan Computers<br />
    Hitachi<br />
    Honda<br />
    Honda Motors (Honda)<br />
    Honeywell<br />
    HSBC<br />
    HTC<br />
    Huawei<br />
    Hutchison Whampoa<br />
    Hyundai<br />
    Hyundai Motor Company<br />
    ICAP<br />
    ICICI<br />
    IKEA<br />
    Illinois Tool Works<br />
    Indesit<br />
    Indian Oil<br />
    Indofood<br />
    Infosys<br />
    ING<br />
    Ingersoll Rand<br />
    Instagram<br />
    Intel<br />
    International Business Machines (IBM)<br />
    International Paper<br />
    Intesa Sanpaolo<br />
    IOCL<br />
    Isuzu<br />
    Jardine Matheson<br />
    JCPenney (J.C. Penney, JC Penny, and JC Penney)<br />
    JG Summit Holdings<br />
    Johnson &amp; Johnson (J&amp;J)<br />
    Jollibee<br />
    JPMorgan Chase (JPMorgan Chase)<br />
    Kenya Airways<br />
    KFC<br />
    Kia Motors (Kia)<br />
    Kingston Technology<br />
    KMart<br />
    Knorr<br />
    Komatsu<br />
    Konami<br />
    Kony<br />
    Kore (Kore.ai and Kore.com)<br />
    KPMG<br />
    Krispy Kreme<br />
    Kroger<br />
    L’Oréal<br />
    Lactalis<br />
    Lagardère<br />
    Lear<br />
    Lenovo<br />
    LensCrafters<br />
    Leonardo<br />
    Leoni AG<br />
    Lexmark<br />
    LG<br />
    LG Electronics (LG)<br />
    Linde<br />
    LiuGong<br />
    Lockheed Martin<br />
    Lotte<br />
    Lowe’s<br />
    Lowes<br />
    Lucent Technologies<br />
    Lukoil<br />
    Lupin<br />
    Lush<br />
    Luxottica<br />
    Mac Cosmetics<br />
    Macy<br />
    Maggi<br />
    Marriott<br />
    Martini &amp; Rossi<br />
    Mastercard<br />
    Masterfoods<br />
    Mattel<br />
    Mazda<br />
    Mercedes-AMG (Mercedes-Benz)<br />
    Merck<br />
    Merrill Lynch<br />
    Metropolitan Life (MetLife)<br />
    Michelin<br />
    Microsoft<br />
    Millipore<br />
    Mitsubishi Electric<br />
    Mobil<br />
    Monsanto<br />
    Motorola<br />
    Nagarro<br />
    Namco Bandai Games<br />
    Nestlé<br />
    NetApp<br />
    New York Life Insurance (New York Life)<br />
    News Corporation (“News Corp”)<br />
    Nike<br />
    Nikon<br />
    Nintendo<br />
    Nissan<br />
    Nissan Motors (Nissan)<br />
    Nordstrom (Nordstrom Rack)<br />
    Novartis<br />
    Oceanit<br />
    Oknoplast<br />
    Ooredoo<br />
    Oracle<br />
    Orbitz<br />
    Origins<br />
    Outfit7<br />
    Pacific Gas and Electric (PG&amp;E)<br />
    Panasonic<br />
    Parmalat<br />
    Partners In Health<br />
    Pepper Lunch<br />
    Pepsi-Cola (Pepsi and PepsiCo)<br />
    Petronas<br />
    Petrovietnam<br />
    Pfizer<br />
    Philips<br />
    Phillip Morris<br />
    Pirelli<br />
    POSCO<br />
    Priceline<br />
    Procter &amp; Gamble (P&amp;G)<br />
    Proton<br />
    PSA Peugeot Citroën (Peugeot Citroën)<br />
    PwC<br />
    QNB<br />
    Quest<br />
    Radio Shack<br />
    Ranbaxy<br />
    Reckitt Benckiser<br />
    Red Bull<br />
    Red Bus<br />
    Regus<br />
    Renault<br />
    Repsol<br />
    RG Multinational<br />
    Ricoh<br />
    Robert Bosch GmbH (Bosch)<br />
    Rockstar Energy<br />
    Rohde &amp; Schwarz<br />
    Royal Bank of Canada (RBC)<br />
    Royal Bank of Scotland (RBS)<br />
    Royal Dutch Shell (Shell)<br />
    RPG<br />
    Rusal<br />
    SABMiller plc<br />
    Safeway<br />
    Samsung Electronics (Samsung)<br />
    San Miguel<br />
    SanDisk<br />
    Sanofi Aventis<br />
    SAP (SAP Labs and SAP SE)<br />
    Sapient<br />
    SAS<br />
    Sasken Communication Technologies<br />
    Sasol<br />
    SBC Communications<br />
    Schlumberger<br />
    Schneider Electric<br />
    Scotiabank<br />
    Sears Roebuck (Sears)<br />
    Sega Sammy Holdings<br />
    Sephora<br />
    Servcorp<br />
    Sharper Image<br />
    Shirokia<br />
    Siemens<br />
    Sinopec<br />
    SM Investments<br />
    Société Générale<br />
    Solaris Bus &amp; Coach<br />
    Sony (Sony Computer Entertainment, Sony Music Entertainment, and Sony Pictures Entertainment)<br />
    Southwest Airlines<br />
    Sprint<br />
    Square Enix<br />
    Standard Chartered<br />
    Starbucks<br />
    State Street<br />
    SunTrust<br />
    Target<br />
    Tata Motors (Tata)<br />
    Tate &amp; Lyle<br />
    TCS<br />
    Tech Mahindra<br />
    Telefonica<br />
    Tesco<br />
    Tetra Pak<br />
    The Body Shop<br />
    The Coffee Bean &amp; Tea Leaf<br />
    The International Press and Media Group (IPMG)<br />
    Thomson Reuters (Reuters)<br />
    Tire and Rubber Company (Goodyear)<br />
    Tissot<br />
    TMobile<br />
    Toshiba<br />
    Total<br />
    Towers Watson<br />
    Toyota<br />
    TRW Automotive<br />
    Tyco<br />
    U.S. Bancorp<br />
    Uber<br />
    Unicredit<br />
    Unilever<br />
    Unisys<br />
    United Airlines (United)<br />
    United Parcel Service (UPS)<br />
    United States Automobile Association (USAA)<br />
    United States Postal Service (USPS)<br />
    Verizon<br />
    Viacom<br />
    Victoria’s Secret<br />
    Viettel Mobile<br />
    Vimpelcom<br />
    Virgin<br />
    Visa<br />
    VNPT<br />
    Vodafone<br />
    Voith<br />
    Wachovia<br />
    Walmart<br />
    Wal-Mart<br />
    Walt Disney (Disney)<br />
    Washington Mutual<br />
    Wells Fargo<br />
    Whirlpool<br />
    Whole Foods<br />
    Wikimedia Foundation<br />
    Wipro<br />
    Wirecard<br />
    Yahoo<br />
    Yakult<br />
    Yamaha<br />
    Zensar Technologies<br />
    ZTE</p>
</details>


### Color

Captures the name of the color from a user utterance. For example, Set the status to Green. Returns a value for the Color as Green as a string.

```
"entities":
{
"ColorEntity": "green"
}
```

<details>
    <summary><b>List of Supported Colors</b></summary>
    <table border="1">
    <thead>
    <tr>
    <th style="text-align: center;">Color</th>
    <th style="text-align: center;">Prefix</th>
    </tr>
    <tr>
    <td>green</td>
    <td>caesious celadon chartreuse chlorochrous glaucous green greenish Kelly olivaceous pistachio porraceous prasinous smaragdine virescent virid viridian zinnober apple celery emerald lime mint olive sage</td>
    </tr>
    <tr>
    <td>brown</td>
    <td>amber bronze brown brownish brunette buff fuscous infuscate mahogany russet rust sandy sepia sienna sinopia sorrel tan taupe terracotta Titian umbra almond chocolate cinnamon coffee copper hazel honey khaki nutmeg rainbow walnut</td>
    </tr>
    <tr>
    <td>orange</td>
    <td>auburn orange orangish</td>
    </tr>
    <tr>
    <td>blue</td>
    <td>aqua aquamarine azuline azure blue blueish cerulean cyaneous indigo mazarine navy pavonated porceline royal teal turquoise ultramarine watchet aquamarine cobalt peacock periwinkle sapphire sky steel</td>
    </tr>
    <tr>
    <td>purple</td>
    <td>amaranthine heliotrope hyacinthine ianthine magenta mauve orchid porphyrous puce purple purplish purpure purpureal rhodopsin aubergine claret lavender lilac mulberry plum violet</td>
    </tr>
    <tr>
    <td>red</td>
    <td>cardinal cerise cinnabar coccineous coquelicot cramoisy crimson cyan erythraean flammeous fuchsia garnet haematic incarnadine kermes lateritious madder magenta maroon miniaceous minium modena nacarat phoeniceous pink pinkish ponceau puccoon puniceous rectory red reddish Rufous sanguineous solferino stammel testaceous umber vermeil vermilion vermillion vinaceous brick burgundy cherry coral raspberry rose ruby salmon strawberry maroon miniaceous minium modena nacarat phoeniceous pink pinkish ponceau puccoon puniceous rectory red reddish Rufous sanguineous solferino stammel testaceous umber vermeil</td>
    </tr>
    <tr>
    <td>yellow</td>
    <td>beige buff citreous citrine gamboge lurid nankeen ochre tawny yellow yellowish apricot butter buttercup butterscotch canary chrome gold goldenrod lemon mustard peach persimmon primrose saffron suede sulphur tangerine</td>
    </tr>
    <tr>
    <td>gold</td>
    <td>metallic</td>
    </tr>
    <tr>
    <td>silver</td>
    <td>metallic</td>
    </tr>
    <tr>
    <td>copper</td>
    <td>metallic</td>
    </tr>
    <tr>
    <td>bronze</td>
    <td>metallic</td>
    </tr>
    <tr>
    <td>black</td>
    <td>blackish ebony jet_black licorice melanic morel nigrine piceous</td>
    </tr>
    <tr>
    <td>white</td>
    <td>blond chalk cream cretaceous ivory magnolia off-white whey white whitish</td>
    </tr>
    <tr>
    <td>grey</td>
    <td>ashen cesious columbine gray grayish grey greyish hoary taupe</td>
    </tr>
    <tr>
    <td>transparent</td>
    <td></td>
    </tr>
    <tr>
    <td>reflective</td>
    <td></td>
    </tr>
    <tr>
    <td>metallic</td>
    <td>argent brass bronze copper gold metallic platinum silver</td>
    </tr>
    </thead>
    </table>
</details>


### Currency

Captures the amount and type of currency from the user utterance. For example, _This handbag is priced at 200 dollars_ where 200 is the amount and USD is the currency.

This entity type recognizes:

* Full currency names (Dollar, Rupees, Indian National Rupees, Dinar)
* Currency symbols ($, S$, £)
* Standard currency abbreviations (INR, USD)
* Commonly used slang for currencies (Buck, Nickel, Dime, Quid, Loonie, Toonie, Benjamin, Jackson, Hamilton.)

!!! Note

    Currency names are not disambiguated based on your previous usage. So, if the user utterance consists of a dollar first time, USD might rank higher than SGD (Singapore Dollar) because of the popularity. But, if the user explicitly mentions SGD, the AI Agent continues to consider SGD for the dollar from there.


```
"CurrencyEntity":
{
"code": "SGD",
"amount": 20
}
```



### Custom

Define a regular expression to validate the user input in the **Expression** field for a custom entity. You can directly enter the expression or use a Content, Context, or Environment variable that contains a regular expression or concept as the value.

See a few examples in the table below.


<table border="1">
  <tr>
   <td><strong>TYPE</strong>
   </td>
   <td><strong>EXAMPLE INPUT IN THE FIELD</strong>
   </td>
   <td><strong>ACCEPTABLE SAMPLE INPUT</strong>
   </td>
  </tr>
  <tr>
   <td>Regular Expression
   </td>
   <td><code>[a-zA-Z]{3}[-]\d{4}</code>
   </td>
   <td>NLP-1234
   </td>
  </tr>
  <tr>
   <td>Concept Variable
   </td>
   <td><code>~car_brands</code>
   </td>
   <td>Tesla
   </td>
  </tr>
  <tr>
   <td>Content, Context, or
<br>
Environment Variable
   </td>
   <td><code>content.TicketNumber</code>
<br>
<code>context.TicketNumber</code>
<br>
<code>env.TicketNumber</code>
<br>
Where the variable <code>TicketNumber</code>
<br>
contains the regular expression
<br>
<code>[a-zA-Z]{3}[-]\d{4}</code> as the value.
   </td>
   <td>NLP-1234
<br>
or
<br>
TKT-1234
   </td>
  </tr>
</table>


!!! Note

    The dialog will fail if the expression is null. If the null expression is desired, app developers can always use the preConditions entity rule as an alternative to skip over a node in the flow.

For more information, refer to [Regex Expressions](https://en.wikipedia.org/wiki/Regular_expression){:target="_blank"}.


### Composite

Composite entities are used to capture multiple entity values in one entity.

For example, consider the sales inquiries for flight bookings. Typical queries can be of the form: _I am interested in flying first class from Los Angeles to New York City, tomorrow._ or _I want to fly to NYC tomorrow_.

As you can see, the AI Agent typically needs to process a combination of details like flight class, departure city, destination city and travel date to respond to those queries.

These scenarios are taken care of by the Composite Entity Type.


### Date

Captures a date mention from a user utterance. For example, _Book a flight on the 10th of October_ returns the value for Date in ISO8601 date format is YYYY-MM-DD.

The AI Agent recognizes all possible ways and formats of dates, like:

* Formatted dates like YYYY-MM-DD, DD-MM-YYYY, DD-MM-YY, YYYY/MM/DD, DD/MM/YYYY, DD/MM/YY, YYYY.MM.DD, DD.MM.YYYY, DD.MM.YY.
* All number dates like YMD and DMY for 20180518 and 09102013.
* Formatted dates with space separators like YYYY MM DD. dd/mm yyyy, dd-mm, dd-mm-yyyy, dd-mm-yy, mm-dd, dd / mm / yyyy, dd . mm . yyyy, ddmm yyyy, mmdd.
* Named months like yyyy/dd/monthNames or yyyy-dd-monthNames or dd.monthNames.yyyy 2018/28/Dec or 2018-28-Dec or 28.Dec.2018.
* Absolute dates related to now like today, tomorrow, yesterday, tonight, this evening, this afternoon, day after tomorrow, the day before yesterday, yesterday morning, tomorrow night, tomorrow for 1 hour, 3 days ago, 24 hours ago, in 3 days, 2 months hence, this day next month last year, next June, June 26 of the year after next, in a week, 2 weeks ago, 22nd of this month, Next month this day, Next 25th, This month 30th, 27th of this month, 3rdmonth, 2nd of the month.
* Named dates like Christmas Day, Christmas Eve, Memorial Day this year, Thanksgiving 2018, last Thanksgiving, week after Thanksgiving, Passover, a day before the new year, day after Christmas.
* Relative dates from absolute like 2 more days from tomorrow, 3 days after July 4, 3 days from now, 5days from today, Need two more days, in 2 days.
* Weekdays like Saturday, coming Monday, Sunday, Saturday, next weekend, First Saturday of the upcoming year, First Sunday of the upcoming month, first Saturday of next month, First Sunday of next year.


```
"entities":
{
"DateEntity": "1982-04-13"
}
```

### Date Time

Captures a date grouping along with time in a user utterance.

For example, _Book a flight on the 10 th of October at 6 pm_, returns the value for Date Time in ISO8601 date format as YYYYY-MM-DDThh: mm: ss.sTZD.

The AI Agent recognizes all possible ways and formats to express date and time.

```
"entities":
{
"DateEntity": "2017-10-10T18:00:00+05:30"
}
```

### Date Period

Captures start date and end date from the user input. For example, Book the hotel for five days starting May 5. If the user input does not include one or both of the dates, the AI Agent prompts the user to provide the necessary input.

!!! Note

    Unlike other entities, Date Period entities allow you to enter two sets of user and errors prompts:

1. User and Error Prompt for From Date.
2. User and Error Prompt for To Date.

The following table lists how the entity works in different scenarios:

<table border="1">
  <tr>
   <td><strong>INPUT TYPE</strong>
   </td>
   <td><strong>AI Agent Behavior</strong>
   </td>
  </tr>
  <tr>
   <td>Does not include both From and To dates [For example, Book hotel].
   </td>
   <td>Shows <em>User Prompts for From Date</em> to the user
   </td>
  </tr>
  <tr>
   <td>Includes either From or To date [For example, Book a hotel from 15th Aug]
   </td>
   <td>Shows <em>User Prompts for From Date</em> or <em>User Prompts for To Date</em> based on which is missing from the input
   </td>
  </tr>
  <tr>
   <td>Includes implicit reference to From Date and duration [For example, Book a hotel for five days starting from Tuesday]
   </td>
   <td>Determines both dates
   </td>
  </tr>
  <tr>
   <td>Includes From Date and duration [For example, Book a hotel for five days from 15th Nov]
   </td>
   <td>Determines both dates
   </td>
  </tr>
  <tr>
   <td>Includes From Date and To Date [For example, Book a hotel from 5th to 10th]
   </td>
   <td>Determines both dates
   </td>
  </tr>
</table>


### Description

Captures statements or paragraphs of text from the user utterance. The value for Description is returned as a string and can include wild characters.

!!! Note

    Multi-Item is not available for this entity type.

```
"entities":
{
"Description": "text here"
}
```


### Email

Captures email address from the utterance. For example, _Send an email to `help@example.com`_ returns the value of **Email** as a string.

```
"entities":
{
"Email": "help@example.com"
}
```


### List of Items (enumerated)

Display a list of values to the end user. To define the list type,

1. Click the **Customise The List Of Itemss** below the **List of items (enumerated) Type** field.
2. On the List of items (enumerated) Setup page, define one of the following list types.
    1. Static List
    2. List from Context

This feature is not fully supported in all languages [Click here for details](../../../app-settings/language-management/multilingual-vas-components-feature-support.md){:target="_blank"}.

* **Static List** – Enter the **Display Name**, **Value**, and **Synonyms** for the key. Set up _Auto-Correction_ value for the user inputs.
* **List from Context** – Define a context variable to use for this item in the following fields:
    * **Specify Context Variable to Use** – Defines the context object type. For example, EnterpriseContext, BotContext, UserContexts, or session variables such as context.entities. Enter`context.`; select a context object type.
    * **Display Name Key** – The name displayed to the end-user.
    * **Value Key** – The key that represents the item's value in the list.
    * **Synonyms Key** – Enter one or more synonyms for the key ([Click here for details](../../natural-language/nlp-guidelines.md#synonyms){:target="_blank"}).

* **Auto-Correction**– Set up auto-correct thresholds for the LOV entity type so that it not only accepts exact matches but also closest utterances with small variations. For example, let us consider that a list value called Apple for which a typo such as _appel_ is accepted based on your threshold settings. The Auto-Correction setting works in the following way:
    1. The AI Agent identifies the number of letters to be changed (inserts, deletes, or replaces) in user input to match it to a value in the list.
    2. The number is converted to a percentage of the total number of letters in the input.
    3. The list value with the highest similarity is considered as input if the score is greater than or equal to the configured percentage.

!!! note 

    Spell correction does not apply to dictionary words or alphanumeric inputs.

Post v7.1, the following keys are added to the context object for the below-mentioned usage:

* **ambiguousEntityValues**: This key contains values when the user input for a multi-item entity is ambiguous. Using this, you can check if any ambiguous values were identified and construct the flow to resolve the ambiguity. This key is reset if the entity is re-prompted during the dialog. The values are an array of JSON objects, each object containing title, value, and synonym.
* **synonymsUsed**: This key holds the synonym used to identify the item. You can use this value to personalize the AI Agent response accordingly if needed. This key is reset if the entity is re-prompted during the dialog.  

<img src="../images/entity-types-list-of-item-enum.png" alt=" List of items (enumerated) " title="List of items (enumerated) " style="border:1px solid gray;zoom:70%;">

!!! note ""

    You can also choose to present the list of values as part of the entity prompt to the user. For this, you need to set the **Display List of Values** to _‘Yes, use channel specific standard formatting for default messages and show available list of values to end user’_. This option works only with the **Plain Text** prompts. This list will not be presented if **JavaScript** based templates are used as prompts.

<img src="../images/entity-types-list-of-item-enum-display-values.png" alt="Display list of values" title="Display list of values" style="border:1px solid gray;zoom:70%;">

!!! Note

    * The ‘**Display List of Values**’ option is available only for the [List of Items (enumerated)](#list-of-items-enumerated). It is **NOT** available for the [List of Items (lookup)](#list-of-items-lookup).

    * When using a list of values entities in the context object, the AI Agent only supports attribute types as “String” for **Title**, **Value**, and **Synonyms**. 


### List of Items (lookup)

Display a list of values to the end user. To define the lookup list,

1. Click the **Customise The List Of Items** below the **List of items (lookup) Type** field.
2. On the List of items (lookup) Setup page, define one of the following list types.
    1. Static List
    2. Remote List

This feature is not fully supported in all languages. [Click here for details](../../../app-settings/language-management/multilingual-vas-components-feature-support.md){:target="_blank"}.

#### Static List

Use Static List to define the entity values as one of the following list types:

* **List of Values** tab: Enter the **Display Name**, **Value**, and **Synonyms** for the key.
* **JSON Preview** tab: Enter a list of key/value pairs and synonyms ([Click here for more](../../../app-settings/language-management/multilingual-vas-components-feature-support.md){:target="_blank"}). For example:  
                 
    ```
    [{
    "title": "United States",
    "value": "US",
    "synonyms": ["united states", "USA", "US", "U.S.A", "America"]
    },
    {
    "title": "John F. Kennedy International Airport",
    "value": "JFK",
    "synonyms": ["John F. Kennedy International Airport", "New York International Airport", "JFK"]
    }
    ]
    ```

* **Upload** tab: Click **Upload** to locate a JSON formatted file list or a .csv file formatted list of key/value pairs. For example,  

    <img src="../images/entity-types-list-of-item-lookup-upload-file.png" alt="Upload file containing key/value pairs" title="Upload file containing key/value pairs" style="border:1px solid gray;zoom:70%;">

Post v7.1, the following keys are added to the context object for the below-mentioned usage:

* **ambiguousEntityValues**: This key contains values when the user input for a multi-item entity is ambiguous. Using this, you can check if any ambiguous values were identified and construct the flow to resolve the ambiguity. This key is reset if the entity is re-prompted during the dialog. The values are an array of JSON objects, each object containing title, value, and synonym.
* **synonymsUsed**: This key holds the synonym used to identify the item. You can use this value to personalize the AI Agent response accordingly if needed. This key is reset if the entity is re-prompted during the dialog.  
<img src="../images/entity-types-list-of-item-lookup-static-list.png" alt=" List of items (enumerated) " title="List of items (enumerated) " style="border:1px solid gray;zoom:70%;">

#### Remote List

Remote List is used when the entity extraction needs to be done by an external service due to security restrictions or any other reasons. This can also be used to handle large data.

The steps involved are as follows:

1. **Define the Service Call**: You can set up a service call similar to how a service node is currently set up. You can set headers, body (for POST), etc,. ([Click here for more](./node-types/working-with-the-service-node.md){:target="_blank"}).  
The external service invoked must have a provision to accept and handle the user utterance data that the platform populates. The `context.inputData` object with the following fields is used for that purpose:
    1. **input** – An array containing the list of inputs received from the user for the current dialog.
    2. **usedUp** – Index form of words that are already used for other entities or intents. The format is _x-y-z_ where
        * x represents the sentence/utterance index (0 till n).
        * y represents the start index of the used up word within the x utterance.
        * z represents the end index of the used up word.
        * _sentenceindex-x-x_ represents no used up words in that sentence.
        * If multiple words are used-up in a single sentence, these should be entered as comma-separated values.

    3. **isMultiItem** – Flag should be set if multiple values are expected from the service call.  

        ```
        "inputData": {
            "input": [
            "get account"
            ],
            "usedUp": [
            "0-x-x"
            ],
            "isMultiItem": false
        }
        ```

2. **Map Response**: You can map a response from the service call with the following fields:
    1. The _context variable_ that holds the response data from the service call. This must be in an _array format._
    2. _Display Key Name_ – Name used to refer to this field; this name is used when interacting with the user. For example, in a disambiguation scenario. This can be accessed using `{{context.entities.&lt;entity-name>.title}}`.
    3. _Value Key_ – The field name in the response body from the service call that holds the value, the entity is assigned this value. This can be accessed using `{{context.entities.&lt;entity-name>.value}}`.
    4. _Synonyms Key_ – The field containing the synonyms for this field, if any. This is the value that the user refers to. For example, in response to the disambiguation question. This can be accessed using `{{context.entities.&lt;entity-name>.synonym}}`.
    5. _Matched Word Index_ – To indicate the words in the _inputData_ that were used for entity extraction (in the same format as the _usedUp_ value in the context.inputData object). This is used by the platform to mark the word as used in the user utterance.

        <img src="../images/entity-types-list-of-items-lookup-setup.png" alt="List of item(Lookup) Setup" title="List of item(Lookup) Setup"style="border:1px solid gray;zoom:70%;">


3. **Flow**: The platform will:

    1. Populate the `context.inputData` with the values mentioned above.
    2. Make the service call to fetch the entity values passing the values as configured in the service call.
    3. Use the values returned as per Response Mapping:
        1. If a single value is returned by the remote system, then that value is assigned to the entity.
        2. If multiple values are returned by the remote system, the platform extracts the entity from this list.
            * If a match is found, it is assigned to the entity.
            * If no match is found, the user is presented with a list of values to choose from. If the user input matches with any of the items in the list, then it is assigned to the entity. If the user input does not match any of the items, then the input is updated in the context object and another call to the remote service is initiated.
            * If one or more matches are found, then it is considered ambiguous and the user is presented with the choices.  If the user input matches with any of the items in the list, then it is assigned to the entity. If the user input does not match any of the items, then the input is updated in the context object and another call to the remote service is initiated.
        
        3. If the entity is marked as a multi-item entity, then the list of values returned from the remote server is re-evaluated and all valid (valid as per entity type) list items are assigned as values for the entity. Invalid list items are discarded.
    
    4. Handle the following exceptions:
        1. In case the response from the service call is empty or not in the expected format, the User Prompt settings for the entity are used to prompt the user for input.
        2. In case of ambiguity, for example, when the service returns multiple values when one is expected, the user is prompted to choose one from the list of values returned by the service.


### Location

Captures the location details of a city or state from a user utterance.

For example, in Bellagio, Las Vegas the entity captures the location details of Las Vegas. The entity returns the location of the object with address and coordinates as a JSON response.

```
"Location":
{
"formatted_address": "Las Vegas, NV, USA",
"lat": 36.1699412,
"lng": -115.1398296
}
```

### Number

Captures a number from a user utterance. For example, _Book a room for 16 people_. In this example, the value 16 is returned as the number.

The platform recognizes the spelled-out numbers and also standard abbreviations such as 1M. A consecutive number of words are combined into one number. For example, one two three becomes 123.

!!! Note

    The maximum number of digits allowed is 18.


```
"entities":
{
"NumberEntity": 16
}
```


### Person Name

Captures the full name of a person from a user utterance.

For example, _Send an email to John Smith,_ where _John Smith_ is identified as Person Name.

The platform assumes that the first word in the user utterance with capital letters as the first name along and the next two words in camel case as a part of the name.

For example, if the user utterance is _I want to talk to John Smith_, it recognizes _John Smith_ as the name. If the utterance is _I want to talk to John smith immediately_ it recognizes only _John_ as the name.

```
"entities":
{
"PersonName": "John Smith"
}
```


### Percentage

Captures the percentage value from a user utterance.

For example, _The chance of rain today is more than 60 percent_, where 60 is the percentage and is returned as a float value of 0.6 in a range of (0.0-1.0). It supports the percent, percentage, and the % sign.

```
"entities":
{
"PercentageEntity": 0.6
}
```


### Phone Number

Captures the standard 3-digit to 12-digit phone number(s) from a user utterance.

For example, Please call 4075551212, the value for the Phone Number is 4075551212 and is returned as a number. The AI Agent now extracts the correct phone number when provided in a non-standard format like (407)-407-4077 or 407.407.4077 without prompting the user to enter the phone number in the correct format. This is applicable to all the Phone Number based entities by default.


```
"entities":
{
"PhoneNumber": "+4075551212"
}
```


**Support for Phone Numbers in Arabic**

The Platform now supports phone numbers in the Arabic language, where the AI Agent identifies the Arabic number given in words from the user utterance (text) and converts it to the relevant digit.

For example:

The input **أربعة صفر سبعة. أربعة صفر سبعة. أربعة صفر سبعة سبعة** is converted to **407 407 407** where “.” is identified as a separator.


### Quantity

Captures the quantity in an utterance with the following details from the user utterance:

* Type of quantity (length, area, volume, etc.).
* Unit of measurement (kilometers, square kilometer, cubic meter, etc.).
* The amount (100, 500, 1.5, etc.).

When you select the Quantity entity type, you also need to select a unit type for the quantity and the default measure.

For example, for capturing volumes, select **Volume** as the **Unity Type** and **Milliliters** as the **Default Unit**. So, if a user utterance is _Add 500 ml of water_, the following JSON is returned:

```
"Quantity":
{
"unit": "milliliter",
"amount": 500,
"type": "volume",
"source": "500 ml"
}
```

The platform identifies all these quantities and unites along with the standard abbreviations, codes, and symbols.

<table border="1">
  <tr>
   <td><strong>TYPE</strong>
   </td>
   <td><strong>UNITS</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Length</strong>
   </td>
   <td>
<ul>

<li>kilometer

<li>meter

<li>centimeter

<li>inch

<li>foot

<li>yard

<li>mile
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Area</strong>
   </td>
   <td>
<ul>

<li>square kilometer

<li>square meter

<li>square mile

<li>square yard

<li>square foot
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Volume</strong>
   </td>
   <td>
<ul>

<li>cubic meter

<li>liter

<li>milliliter

<li>gallon

<li>ounce
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Time</strong>
   </td>
   <td>
<ul>

<li>hour

<li>minute

<li>second

<li>millisecond
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Speed</strong>
   </td>
   <td>
<ul>

<li>meters per second

<li>kilometers per hour

<li>miles per hour
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Pressure</strong>
   </td>
   <td>
<ul>

<li>pascal

<li>atmosphere

<li>bar
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Energy</strong>
   </td>
   <td>
<ul>

<li>calorie

<li>kilocalorie

<li>watt-hour

<li>kilowatt-hour
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Memory</strong>
   </td>
   <td>
<ul>

<li>bit

<li>byte

<li>kilobyte

<li>megabyte

<li>terabyte

<li>gigabyte
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Weight</strong>
   </td>
   <td>
<ul>

<li>ton

<li>kilogram

<li>gram

<li>pound

<li>ounce
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Angle</strong>
   </td>
   <td>
<ul>

<li>degree
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Age</strong>
   </td>
   <td>
<ul>

<li>day

<li>week

<li>month

<li>year

<li>decade

<li>century
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Temperature</strong>
   </td>
   <td>
<ul>

<li>celsius

<li>fahrenheit
</li>
</ul>
   </td>
  </tr>
</table>



### String

Works identical to the [Description entity type](#description) but limited to one sentence.

There won’t be any validations done on the user utterance for string entities unless trained. Hence this entity type is used as a last resort when your requirement is not met with any of the platform supported entity types.


### Time

Capture time in a user utterance. For example, _Set my alarm for 6 am_, return the value of Time in ISO 8601 time format as HH:MM:SS.sZD.  

It recognizes the following denotations:

* am, a.m., AM, pm, p.m., PM, P.M.
* Numbers spelled out. For example, Six AM.
* Morning and evening. For example, Six in the evening.

```
"entities":
{
"TimeEntity": "T06:00:00+05:30"
}
```


### Time Zone

A time zone. _Eastern Standard Time_ converts the timezone into GMT and stores the resulting value. For example, if you type EST, it is stored as -6:00. The platform recognizes the standard time zones.

```
"entities":
{
"TimeZoneEntity": "-06:00"
}
```


### URL

Captures a web URL from the utterance. The AI Agent recognizes all standard formats of URLs. For example, _Visit our website `www.example.com`. The value for the URL is returned as a string.

```
"entities":
{
"URLEntity": "www.kore.ai"
}
```


### Zip Code

Captures a zip code from the user utterance. For example, _What is the weather for 32746?_ The value for Zip Code is 32746 and is returned as a string.

Please note that the entity does not pick a zip code from regular expressions (eg: #$A1B2%), however it successfully picks the zip code if it contains hyphen, spaces or leading “0”s in the utterance.

```
"entities":
{
"ZipcodeEntity": "32746"
}
```