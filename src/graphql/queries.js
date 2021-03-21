/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBusinesss = /* GraphQL */ `
  query GetBusinesss($id: ID!) {
    getBusinesss(id: $id) {
      id
      title
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listBusinessss = /* GraphQL */ `
  query ListBusinessss(
    $filter: ModelBusinesssFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusinessss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBusinessses = /* GraphQL */ `
  query SyncBusinessses(
    $filter: ModelBusinesssFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBusinessses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
