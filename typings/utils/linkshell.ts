import { CharacterSearchResult } from "./character";
import { SearchParams, SearchResult } from "./search";

export interface LinkshellSearchParams extends SearchParams {}

export interface LinkshellSearchResult extends SearchResult {
  Results: {
    Crest: string[];
    ID: string;
    Name: string;
    Server: string;
  }[];
}

export interface LinkshellGetResult {
  Linkshell: {
    ID: string;
    Pagination: SearchResult["Pagination"];
    Profile: {
      Name: string;
      Server: string;
    };
    Results: CharacterSearchResult["Results"];
  };
}
