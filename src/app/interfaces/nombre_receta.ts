export interface RecipeName {
  results:      Result[];
  offset:       number;
  number:       number;
  totalResults: number;
}

export interface Result{
  id:        number;
  title:     string;
  image:     string;
  imageType: string;
}
