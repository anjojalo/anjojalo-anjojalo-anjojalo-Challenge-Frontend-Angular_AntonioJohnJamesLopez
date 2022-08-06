export interface Welcome {
  vegetarian:               boolean;
  vegan:                    boolean;
  glutenFree:               boolean;
  dairyFree:                boolean;
  veryHealthy:              boolean;
  cheap:                    boolean;
  veryPopular:              boolean;
  sustainable:              boolean;
  lowFodmap:                boolean;
  weightWatcherSmartPoints: number;
  gaps:                     string;
  preparationMinutes:       number;
  cookingMinutes:           number;
  aggregateLikes:           number;
  healthScore:              number;
  creditsText:              string;
  license:                  string;
  sourceName:               string;
  pricePerServing:          number;
  extendedIngredients:      ExtendedIngredient[];
  id:                       number;
  title:                    string;
  readyInMinutes:           number;
  servings:                 number;
  sourceUrl:                string;
  openLicense:              number;
  image:                    string;
  imageType:                string;
  summary:                  string;
  cuisines:                 any[];
  dishTypes:                string[];
  diets:                    any[];
  occasions:                any[];
  winePairing:              WinePairing;
  instructions:             string;
  analyzedInstructions:     any[];
  originalId:               null;
  spoonacularSourceUrl:     string;
}

interface ExtendedIngredient {
  id:           number;
  aisle:        string;
  image:        string;
  consistency:  Consistency;
  name:         string;
  nameClean:    string;
  original:     string;
  originalName: string;
  amount:       number;
  unit:         string;
  meta:         string[];
  measures:     Measures;
}

enum Consistency {
  Liquid = "LIQUID",
  Solid = "SOLID",
}

 interface Measures {
  us:     Metric;
  metric: Metric;
}

 interface Metric {
  amount:    number;
  unitShort: string;
  unitLong:  string;
}

 interface WinePairing {
  pairedWines:    any[];
  pairingText:    string;
  productMatches: any[];
}
