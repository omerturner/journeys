
import { Typography } from 'antd';

const { Paragraph } = Typography;

const TextBlock = ({ text }) => <div>{text.map(p => <Paragraph>{p}</Paragraph>)}</div>

export default TextBlock;