import requests
import pprint
import pandas as pd


'''query = """  {
  __type(name: "Characters") {
    name
    fields {
      name
      type {
        name
        kind
        ofType {
          name
          kind
        }
      }
    }
  }
}
"""'''
'''
query = """  {
  __type(name: "Characters"){
    fields{name}
  }
}
"""
#{'data': {'__type': {'fields': [{'name': 'info'}, {'name': 'results'}]}}}

query = """  {
  __type(name: "Info") {
    fields{name}
  }
}
"""
#{'data': {'__type': {'fields': [{'name': 'count'}, {'name': 'pages'}, {'name': 'next'}, {'name': 'prev'}]}}}


query = """  {
  characters{
    info{count}
  }
}
"""
#{'data': {'characters': {'info': {'count': 826}}}}


query = """  {
  __type(name: "results") {
    fields{name}
  }
}
"""
#{'data': {'__type': None}}

query = """  {
  characters{
    info{pages}
  }
}
"""
#{'data': {'characters': {'info': {'pages': 42}}}}

query = """  {
  characters{
    results{id}
  }
}
"""
#{'data': {'characters': {'results': [{'id': '1'}, {'id': '2'}, {'id': '3'}, {'id': '4'}, {'id': '5'}, {'id': '6'}, {'id': '7'}, {'id': '8'}, {'id': '9'}, {'id': '10'}, {'id': '11'}, {'id': '12'}, {'id': '13'}, {'id': '14'}, {'id': '15'}, {'id': '16'}, {'id': '17'}, {'id': '18'}, {'id': '19'}, {'id': '20'}]}}}

query = """  {
  characters{
    results{name}
  }
}
"""
#{'data': {'characters': {'results': [{'name': 'Rick Sanchez'}, {'name': 'Morty Smith'}, {'name': 'Summer Smith'}, {'name': 'Beth Smith'}, {'name': 'Jerry Smith'}, {'name': 'Abadango Cluster Princess'}, {'name': 'Abradolf Lincler'}, {'name': 'Adjudicator Rick'}, {'name': 'Agency Director'}, {'name': 'Alan Rails'}, {'name': 'Albert Einstein'}, {'name': 'Alexander'}, {'name': 'Alien Googah'}, {'name': 'Alien Morty'}, {'name': 'Alien Rick'}, {'name': 'Amish Cyborg'}, {'name': 'Annie'}, {'name': 'Antenna Morty'}, {'name': 'Antenna Rick'}, {'name': 'Ants in my Eyes Johnson'}]}}}


url = 'https://rickandmortyapi.com/graphql/'
r = requests.post(url, json={'query': query})
print(r.status_code)
r_json = r.json()

print(r_json)



query = """  {__schema{queryType{name}mutationType{name}subscriptionType{name}types{...FullType}directives{name description locations args{...InputValue}}}}fragment FullType on __Type{kind name description fields(includeDeprecated:true){name description args{...InputValue}type{...TypeRef}isDeprecated deprecationReason}inputFields{...InputValue}interfaces{...TypeRef}enumValues(includeDeprecated:true){name description isDeprecated deprecationReason}possibleTypes{...TypeRef}}fragment InputValue on __InputValue{name description type{...TypeRef}defaultValue}fragment TypeRef on __Type{kind name ofType{kind name ofType{kind name ofType{kind name ofType{kind name ofType{kind name ofType{kind name ofType{kind name}}}}}}}}

# result = maxy json
"""
query = """  {
  __schema {
    types {
      name
    }
  }
}
"""

query = """  {
  __schema {
    types {
      name
      kind
    }
  }
}
"""
query = """  {
  __schema {
    queryType {
      fields {
        name
        description
      }
    }
  }
}
"""
query = """  {
  __schema {
    types {
      name
      description
    }
  }
}
"""
{
  __type(name: "artworks"){
    fields{name}
  }
}
{'data': {'__type': {'fields': [{'name': 'artwork_facts'},
                                {'name': 'artwork_group'},
                                {'name': 'artwork_group_id'},
                                {'name': 'authorships'},
                                {'name': 'authorships_aggregate'},
                                {'name': 'bid_facts'},
                                {'name': 'description'},
                                {'name': 'editions'},
                                {'name': 'id'},
                                {'name': 'media_metadata'},
                                {'name': 'media_type'},
                                {'name': 'metadata'},
                                {'name': 'sale_facts'},
                                {'name': 'sale_facts_aggregate'},
                                {'name': 'tags'},
                                {'name': 'title'},
                                {'name': 'tokens'},
                                {'name': 'tokens_aggregate'},
                                {'name': 'transfer_facts'},
                                {'name': 'transfer_facts_aggregate'},
                                {'name': 'url'}]}}}
                                
query = """   {
  __type(name: "artwork_facts"){
    fields{name}
  }
}

{'data': {'__type': {'fields': [{'name': 'artwork'},
                                {'name': 'artwork_group'},
                                {'name': 'artwork_group_id'},
                                {'name': 'artwork_group_name'},
                                {'name': 'artwork_id'},
                                {'name': 'contract_address'},
                                {'name': 'creator'},
                                {'name': 'description'},
                                {'name': 'editions'},
                                {'name': 'gallery'},
                                {'name': 'gallery_id'},
                                {'name': 'gallery_name'},
                                {'name': 'gallery_url'},
                                {'name': 'id'},
                                {'name': 'identity'},
                                {'name': 'identity_id'},
                                {'name': 'media_metadata'},
                                {'name': 'media_type'},
                                {'name': 'metadata'},
                                {'name': 'nifty_value_eth'},
                                {'name': 'nifty_value_eth_weekly_trend'},
                                {'name': 'nifty_value_usd'},
                                {'name': 'nifty_value_usd_weekly_trend'},
                                {'name': 'owner'},
                                {'name': 'preview'},
                                {'name': 'tags'},
                                {'name': 'timestamp'},
                                {'name': 'title'},
                                {'name': 'url'}]}}}

query = """   {
  artwork_facts{
    title
  }
}
"""
                                
{'data': {'artwork_facts': [{'title': 'ǝɹǝɥ ʎpɐǝɹl∀'},
                            {'title': 'Liquid Dream Pop'},
                            {'title': 'Perdita'},
                            {'title': None},
                            {'title': 'The reincarnations of Buddha Deep'},
                            {'title': 'blue tape'},
                            {'title': 'Merrily We Go to Hell'},
                            {'title': 'Outlander'},
                            {'title': 'Whole of Halving (I)'},
                            
query = """   {
    artworks{
    url
  }
}
"""                      
{'data': {'artworks': [{'url': ''},
                       {'url': 'https://ipfs.pixura.io/ipfs/Qmar9LZwD1DAVbYe7hXQw3TbanUCetepJft7nqCxaX6ke1'},
                       {'url': 'https://ipfs.pixura.io/ipfs/QmVMaF2LKGUu7rGLM7ibcEuoxa59PZ11wy7twvberqrLcr'},
                       {'url': 'https://ipfs.pixura.io/ipfs/QmSJjfxcn8ki9SDhUtgefpLX6aS7RNFSEZ1xXgR8vTUVXm'},
                       {'url': 'https://ipfs.pixura.io/ipfs/QmXAYvTCi4a1k3SDp18Xg6RcwUyAtLqQ7roz9sdKeFfqM6'},
                       {'url': 'https://ipfs.pixura.io/ipfs/QmPKmn2qEdBCt1SqrQEgKfCadMhBAr56D4ywMcB4ApZvmp'},
                       {'url': 'https://ipfs.pixura.io/ipfs/QmSVDFANiJWiMQ4JkJiTwSRsVPS7i2JQ1nJfEdy8wxATwV'},
                       {'url': 'https://ipfs.pixura.io/ipfs/QmamMs5QsdzAdpf4yb23gTzvWww8roZqr2VnWBNqAh42ie'},
                       {'url': 'https://ipfs.pixura.io/ipfs/QmTH5b1cAErG8ASfpFSZcGrmKQE92Wk2fK11LqbvGLVfPX'},
                       {'url': 'https://ipfs.io/ipfs/QmdVByNPPerByyPNYmPKYhNV8WzvELjFt1Z7uhMqgCaASn/nft.jpg'},
                       {'url': 'https://ipfs.pixura.io/ipfs/QmPL35d35FaJeFXhq898uK5n26dG8LCxttoiL6iztT1C59'},
                       {'url': 'https://ipfs.pixura.io/ipfs/QmXtgrED4qXbsRAtmmZt4xz2LLPHiCoVU8qMVD2gyhgcrt'},
                       {'url': 'https://ipfs.pixura.io/ipfs/QmXgeFB52zP8GZmSA4WjUd8DuJq12SDM26Qxy8wrqsqGqr'},


query = """   {
    artwork_facts(limit: 10){
    artwork_group{name}
  }
}
"""
{'data': {'artwork_facts': [{'artwork_group': {'name': 'Villain Ungloved Open '
                                                       'Editions by Odious'}},
                            {'artwork_group': {'name': 'All Access Pass Pack '
                                                       '//001 by ODESZA x '
                                                       'Japanese Dad'}},
                            {'artwork_group': None},
                            {'artwork_group': None},
                            {'artwork_group': None},
                            {'artwork_group': None},
                            {'artwork_group': None},
                            {'artwork_group': None},
                            {'artwork_group': None},
                            {'artwork_group': None}]}}

query = """   {
  __type(name: "artworks_max_order_by"){
    fields{name}
  }
}
"""

query = """   {
  __type(name: "artwork_facts_by_pk"){
    fields{name}
  }
}
"""

url = 'https://staging.gql.api.niftyvalue.com/v1/graphql'
r = requests.post(url, json={'query': query})
print(r.status_code)
r_json = r.json()

pprint.pprint(r_json)


query = """   {
  __type(name: "artwork_facts_by_pk"){
    fields{name}
  }
}
"""

url = 'https://staging.gql.api.niftyvalue.com/v1/graphql'
r = requests.get(url,"[664656,116943,579970,582060]")
print(r.status_code)
r_json = r.json()

pprint.pprint(r_json)


query = """ ($id2: bigint_comparison_exp){
    artwork_facts(where: {id: $id2}){
    url
  }
}
{
  
  "id2": 664656
}
"""

query($id2: ID, $id1: ID) {
  someoperation(id: $id1) {
    nestedoperation(id: $id2) {
      field1
    }
  }
}

// Variables
{
  "id1": 1,
  "id2": 1
}

url = 'https://staging.gql.api.niftyvalue.com/v1/graphql'
r = requests.post(url, json={'query': query})
print(r.status_code)
r_json = r.json()

pprint.pprint(r_json)

import requests

query = """query OrdersQuery(\n  $cursor: String\n  $count: Int = 10\n  $excludeMaker: IdentityInputType\n  $isExpired: Boolean\n  $isFilled: Boolean\n  $isValid: Boolean\n  $maker: IdentityInputType\n  $makerArchetype: ArchetypeInputType\n  $makerAssetIsPayment: Boolean\n  $takerArchetype: ArchetypeInputType\n  $takerAssetCategories: [CollectionSlug!]\n  $takerAssetCollections: [CollectionSlug!]\n  $takerAssetIsOwnedBy: IdentityInputType\n  $takerAssetIsPayment: Boolean\n  $sortAscending: Boolean\n  $sortBy: OrderSortOption\n  $makerAssetBundle: BundleSlug\n  $takerAssetBundle: BundleSlug\n) {\n  ...Orders_data_2g7x2d\n}\n\nfragment AccountLink_data on AccountType {\n  address\n  chain {\n    identifier\n    id\n  }\n  user {\n    publicUsername\n    id\n  }\n  ...ProfileImage_data\n  ...wallet_accountKey\n}\n\nfragment AskPrice_data on OrderV2Type {\n  dutchAuctionFinalPrice\n  openedAt\n  priceFnEndedAt\n  makerAssetBundle {\n    assetQuantities(first: 30) {\n      edges {\n        node {\n          ...quantity_data\n          id\n        }\n      }\n    }\n    id\n  }\n  takerAssetBundle {\n    assetQuantities(first: 1) {\n      edges {\n        node {\n          ...AssetQuantity_data\n          id\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment AssetCell_assetBundle on AssetBundleType {\n  assetQuantities(first: 2) {\n    edges {\n      node {\n        asset {\n          collection {\n            name\n            id\n          }\n          name\n          ...AssetMedia_asset\n          ...asset_url\n          id\n        }\n        relayId\n        id\n      }\n    }\n  }\n  name\n  slug\n}\n\nfragment AssetMedia_asset on AssetType {\n  animationUrl\n  backgroundColor\n  collection {\n    description\n    displayData {\n      cardDisplayStyle\n    }\n    imageUrl\n    hidden\n    name\n    slug\n    id\n  }\n  description\n  name\n  tokenId\n  imageUrl\n}\n\nfragment AssetQuantity_data on AssetQuantityType {\n  asset {\n    ...Price_data\n    id\n  }\n  quantity\n}\n\nfragment Orders_data_2g7x2d on Query {\n  orders(after: $cursor, excludeMaker: $excludeMaker, first: $count, isExpired: $isExpired, isFilled: $isFilled, isValid: $isValid, maker: $maker, makerArchetype: $makerArchetype, makerAssetIsPayment: $makerAssetIsPayment, takerArchetype: $takerArchetype, takerAssetCategories: $takerAssetCategories, takerAssetCollections: $takerAssetCollections, takerAssetIsOwnedBy: $takerAssetIsOwnedBy, takerAssetIsPayment: $takerAssetIsPayment, sortAscending: $sortAscending, sortBy: $sortBy, makerAssetBundle: $makerAssetBundle, takerAssetBundle: $takerAssetBundle) {\n    edges {\n      node {\n        closedAt\n        isFulfillable\n        isValid\n        oldOrder\n        openedAt\n        orderType\n        maker {\n          address\n          ...AccountLink_data\n          ...wallet_accountKey\n          id\n        }\n        makerAsset: makerAssetBundle {\n          assetQuantities(first: 1) {\n            edges {\n              node {\n                asset {\n                  assetContract {\n                    account {\n                      address\n                      chain {\n                        identifier\n                        id\n                      }\n                      id\n                    }\n                    id\n                  }\n                  id\n                }\n                id\n              }\n            }\n          }\n          id\n        }\n        makerAssetBundle {\n          assetQuantities(first: 30) {\n            edges {\n              node {\n                ...AssetQuantity_data\n                ...quantity_data\n                id\n              }\n            }\n          }\n          id\n        }\n        relayId\n        side\n        taker {\n          ...AccountLink_data\n          ...wallet_accountKey\n          id\n          address\n        }\n        takerAssetBundle {\n          assetQuantities(first: 1) {\n            edges {\n              node {\n                ...AssetQuantity_data\n                ...quantity_data\n                asset {\n                  ownedQuantity(identity: {})\n                  decimals\n                  symbol\n                  relayId\n                  assetContract {\n                    account {\n                      address\n                      id\n                    }\n                    id\n                  }\n                  id\n                }\n                quantity\n                id\n              }\n            }\n          }\n          id\n        }\n        ...AskPrice_data\n        ...orderLink_data\n        makerAssetBundleDisplay: makerAssetBundle {\n          ...AssetCell_assetBundle\n          id\n        }\n        takerAssetBundleDisplay: takerAssetBundle {\n          ...AssetCell_assetBundle\n          id\n        }\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment Price_data on AssetType {\n  decimals\n  imageUrl\n  symbol\n  usdSpotPrice\n  assetContract {\n    blockExplorerLink\n    id\n  }\n}\n\nfragment ProfileImage_data on AccountType {\n  imageUrl\n  address\n  chain {\n    identifier\n    id\n  }\n}\n\nfragment asset_url on AssetType {\n  assetContract {\n    account {\n      address\n      chain {\n        identifier\n        id\n      }\n      id\n    }\n    id\n  }\n  tokenId\n}\n\nfragment orderLink_data on OrderV2Type {\n  makerAssetBundle {\n    assetQuantities(first: 30) {\n      edges {\n        node {\n          asset {\n            externalLink\n            collection {\n              externalUrl\n              id\n            }\n            id\n          }\n          id\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment quantity_data on AssetQuantityType {\n  asset {\n    decimals\n    id\n  }\n  quantity\n}\n\nfragment wallet_accountKey on AccountType {\n  address\n  chain {\n    identifier\n    id\n  }\n}\n"""
variables = {"cursor": None, "count": 10, "excludeMaker": None, "isExpired": False, "isFilled": None, "isValid": True, "maker": None, "makerArchetype": None, "makerAssetIsPayment": True, "takerArchetype": {"assetContractAddress": "0x7c40c393dc0f283f318791d746d894ddd3693572",
                                                                                                                                                                                                              "tokenId": "7722"}, "takerAssetCategories": None, "takerAssetCollections": None, "takerAssetIsOwnedBy": None, "takerAssetIsPayment": None, "sortAscending": None, "sortBy": "MAKER_ASSETS_USD_PRICE", "makerAssetBundle": None, "takerAssetBundle": None}
response = requests.post('https://api.opensea.io/graphql/',
    json={"query": query, "variables": variables}
)
print(response.text)


'''

query = """{__schema{queryType{name}mutationType{name}subscriptionType{name}types{...FullType}directives{name description locations args{...InputValue}}}}fragment FullType on __Type{kind name description fields(includeDeprecated:true){name description args{...InputValue}type{...TypeRef}isDeprecated deprecationReason}inputFields{...InputValue}interfaces{...TypeRef}enumValues(includeDeprecated:true){name description isDeprecated deprecationReason}possibleTypes{...TypeRef}}fragment InputValue on __InputValue{name description type{...TypeRef}defaultValue}fragment TypeRef on __Type{kind name ofType{kind name ofType{kind name ofType{kind name ofType{kind name ofType{kind name ofType{kind name ofType{kind name}}}}}}}}"""
url = "https://artdiscovery.api.niftyvalue.com/recs/api/v1.0/recs?artworks_pos=11,92&artworks_neg=7152"
r = requests.post(url, json={'query': query})
print(r.status_code)
r_json = r.json()

pprint.pprint(r_json)