import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Businesss {
  readonly id: string;
  readonly title?: string;
  readonly description?: string;
  constructor(init: ModelInit<Businesss>);
  static copyOf(source: Businesss, mutator: (draft: MutableModel<Businesss>) => MutableModel<Businesss> | void): Businesss;
}