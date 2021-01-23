import _ from 'lodash';
import { CoffeeOutlined, SketchOutlined } from '@ant-design/icons';


const types = [
  {
    id: 'restaurant',
    label: 'Restaurant',
    icon: <CoffeeOutlined style={{ fontSize: 20 }} />
  },
  {
    id: 'park',
    label: 'Park',
    icon: <SketchOutlined style={{ fontSize: 20 }} />
  },
]

const getType = (id) => {
  return _.find(types, { id });
}

export {
  getType
};