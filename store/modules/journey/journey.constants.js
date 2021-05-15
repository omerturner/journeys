
import _ from 'lodash';

import LocationIconOutlined from "../../../assets/icons/location-outline.svg";
import CoffeeIconOutlined from "../../../assets/icons/cafe-outline.svg";
import RestaurantIconOutlined from "../../../assets/icons/restaurant-outline.svg";
import FlowerIconOutlined from "../../../assets/icons/flower-outline.svg";
import PubIconOutlined from "../../../assets/icons/beer-outline.svg";
import WineIconOutlined from "../../../assets/icons/wine-outline.svg";
import PizzaIconOutlined from "../../../assets/icons/pizza-outline.svg";
import ZooIconOutlined from "../../../assets/icons/paw-outline.svg";

import RestaurantIconFilled from "../../../assets/icons/restaurant.svg";
import CoffeeIconFilled from "../../../assets/icons/cafe.svg";
import PizzaIconFilled from "../../../assets/icons/pizza.svg";
import LocationIconFilled from "../../../assets/icons/location.svg";

export const TYPE_GALLERY = 'gallery';
export const TYPE_TEXT = 'text';
export const TYPE_IMAGE = 'image';

export const LOCATION_RESTAURANT = 'restaurant';
export const LOCATION_PARK = 'park';
export const LOCATION_COFFEE = 'coffee';
export const LOCATION_PUB = 'pub';
export const LOCATION_WINEBAR = 'winebar';
export const LOCATION_PIZZA = 'pizza';
export const LOCATION_ZOO = 'zoo';

const locationTypeMap = {
  [LOCATION_RESTAURANT]: {
    label: 'Restaurant',
    icon: RestaurantIconOutlined,
    mapIcon: RestaurantIconFilled,
    mapIconColor: '#F29800'
  },
  [LOCATION_COFFEE]: {
    label: 'Coffee',
    icon: CoffeeIconOutlined,
    mapIcon: CoffeeIconFilled,
    mapIconColor: "#FF5252"
  },
  [LOCATION_PARK]: {
    label: 'Park',
    icon: FlowerIconOutlined
  },
  [LOCATION_PUB]: {
    label: 'Pub',
    icon: PubIconOutlined,
    mapIcon: LocationIconFilled
  },
  [LOCATION_WINEBAR]: {
    label: 'Wine Bar',
    icon: WineIconOutlined,
    mapIcon: LocationIconFilled
  },
  [LOCATION_PIZZA]: {
    label: 'Pizza',
    icon: PizzaIconOutlined,
    mapIcon: PizzaIconFilled,
    mapIconColor: "#F29800"
  },
  [LOCATION_ZOO]: {
    label: 'Zoo',
    icon: ZooIconOutlined,
    mapIcon: LocationIconFilled
  },
  'default': {
    label: 'Location',
    icon: LocationIconOutlined,
    mapIcon: LocationIconFilled
  }
}

const getLocationType = (id) => {
  return _.get(locationTypeMap, id, locationTypeMap.default);
}

export {
  getLocationType
};