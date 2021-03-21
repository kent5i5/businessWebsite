/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBusinesss = /* GraphQL */ `
  mutation CreateBusinesss(
    $input: CreateBusinesssInput!
    $condition: ModelBusinesssConditionInput
  ) {
    createBusinesss(input: $input, condition: $condition) {
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
export const updateBusinesss = /* GraphQL */ `
  mutation UpdateBusinesss(
    $input: UpdateBusinesssInput!
    $condition: ModelBusinesssConditionInput
  ) {
    updateBusinesss(input: $input, condition: $condition) {
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
export const deleteBusinesss = /* GraphQL */ `
  mutation DeleteBusinesss(
    $input: DeleteBusinesssInput!
    $condition: ModelBusinesssConditionInput
  ) {
    deleteBusinesss(input: $input, condition: $condition) {
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
