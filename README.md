# swapi api extender
This project fetches data from the SWAPI API and adds features like search, sort, etc. to make it more useful.

## How to run
Run the script using below command:
```bash
1. npm install
2. npm start
Note: The service requires an internet connection to be used.
```
## API Reference
→ It supports multiple type of query, where use need to add requirement as a query data.

#### 1. Get a list of people whose name= Luke Skywalker
```http
GET /people?name=Luke Skywalker
```
| Parameter | Type     |
| :-------- | :------- |
|   `name`  | `string` |

#### 2. Get a list of people whose height is greater than 172.
```http
GET /people?height=[gt]172
```
Note: 
1. It only supports integer fields for this property.
2. It supports 4 types of Maths sign  
→ [gt]  = greater than  
→ [gte] = greter than or equal to  
→ [lt]  = less than  
→ [lte] = less than or equal to  

| Parameter | Type     |
| :-------- | :------- |
|  `height` |`integer` |

#### 3. Sort people list with field mass & order = descending
```http
GET /people?sortby=mass&order=desc
```
Note: 
1. It only supports integer fields for sorting and adds the exact name of the field.
2. It supports 2 types of orders.  
→ 'asc'  - ascending (default)  
→ 'desc' - descending
 
| Parameter | Type     |
| :-------- | :------- |
|  `sortby` | `string` |
|  `order`  | `string` |

#### 4. Combination of all the types of supported queries.
```http
GET /people?gender=male&mass=[gt]120&sortby=height&order=asc
```

| Parameter | Type     |
| :-------- | :------- |
|  `gender` | `string` |
|  `mass`   | `integer`|
|  `sortby` | `string` |
|  `order`  | `string` |

