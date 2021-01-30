import { TYPE_GALLERY, TYPE_IMAGE, TYPE_TEXT, getLocationType } from '../../../../store/modules/journey/journey.constants';
import Gallery from './Gallery/Gallery';
import TextBlock from './TextBlock/TextBlock';
import { LayoutItemContainer, StyledMetadata, StyledTitle } from './style';
import { Image, Rate } from 'antd';
import _ from 'lodash';


const Location = ({ location }) => {

  const renderLayoutItem = (item) => {
    const { properties: props } = item;
    switch (item.type) {
      case TYPE_TEXT:
        return <TextBlock {...props} />
      case TYPE_GALLERY:
        return <Gallery {...props}/>
      case TYPE_IMAGE:
        return <Image {...props} />
    }
  }

  const { label } = getLocationType(location.type);
  return (
    <>
    <StyledTitle level={3}>{location.title}</StyledTitle>
    <StyledMetadata type="secondary">{label}</StyledMetadata>
    <StyledMetadata type="secondary">{location.location.address1}</StyledMetadata>
    <Rate allowHalf disabled defaultValue={location.rating}/>
    {
      location.image ?
      <div style={{ margin: "20px 0 40px 0" }}>
        {renderLayoutItem({
          type: "image",
          properties: {...location.image}
        })}
      </div>
      : ""
    }
    {
      _.orderBy(location.layout, ['order'], ['asc'])
      .map(item => (
          <LayoutItemContainer key={item.order}>
            {renderLayoutItem(item)}
          </LayoutItemContainer>
        )
      )
    }
    </>
  )
};

export default Location;