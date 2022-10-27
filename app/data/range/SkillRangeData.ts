import {SliderRange} from '../../components/sliders/SliderComponent';

export interface SkillRange extends SliderRange {
  pourcentage: number;
}

export const skillRange: SkillRange[] = [
  {label: 'Beginner', value: 0, pourcentage: 100},
  {label: 'Inter / Beg', value: 1, pourcentage: 50},
  {label: 'Intermediate', value: 2, pourcentage: 25},
  {label: 'Advan / Inter', value: 3, pourcentage: 5},
  {label: 'Advanced', value: 4, pourcentage: 0},
];
