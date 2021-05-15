import { StyledInfoWindow } from './style';
import { Card, Rate, Tag, Image } from 'antd';


const InfoWindow = ({ place: { rating, title, categories, image } }) => (
  <StyledInfoWindow 
    cover={<Image 
      width={200} 
      style={{ maxHeight: 200 }} 
      src={image.src} />}>
    <Card.Meta title={title} description={
      <>
        <Rate allowHalf disabled defaultValue={rating} style={{ marginBottom: 15 }}/>
        {
          categories.slice(0,2).map(cat => <Tag>{cat.title}</Tag>)
        }
      </>
    } />
    
  </StyledInfoWindow>
);

export default InfoWindow;