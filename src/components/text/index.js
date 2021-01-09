
import { Typography } from 'antd';

const { Paragraph } = Typography;

const Text = ({ text }) => <div>{text.map(p => <Paragraph>{p}</Paragraph>)}</div>

export default Text;