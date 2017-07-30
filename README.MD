# Name Check

## Purpose

The purpose of this application is to provide a quick way for non-profit orginizations
to check and store a list of individuals or organizations that receive international monitary transactions.

## How
- Provide a place to add and store recipients of the organization
- Provide Scheduled Checking of the organizations list
- Clear marking of a potential specially designated national and blocked persons list 
- Scheduled download and updating of sdn list
- Send notification of potential blocked persons 

## User Stories

### User can:

- register
- login
- run a check on a name (not logged in)
- view info about the sdn 
- view contact info

(Once logged in)

- add recipients to a list
- schedule checks on list
- see a list of reports
- see list of recipients
- see individual recipient summary including list of reports they were checked under with dates and times
- recieve email of findings after check
- search recipient repository for a particular name

# Topics to look up/ think about
- search php xml
- donate hosting
- one table with all the people data 


# Getting Contents
   - info on sdn searching https://www.treasury.gov/resource-center/sanctions/SDN-List/Pages/fuzzy_logic.aspx
   - [SDN.XML Schema](https://www.treasury.gov/resource-center/sanctions/SDN-List/Documents/sdn.xsd)
   - `file_get_contents(filename);`
   - making an instance of SimpleXmlElement and can get individual elements as an array.
      - `$xml = new SimpleXMLElement($xmlString);`
      - `var_dump($xml->sdnEntry)`

# Simple Table Structure
- id
- first_name
- last_name
- aka_first
- aka_last

# Stretch Table Structure
- ???








