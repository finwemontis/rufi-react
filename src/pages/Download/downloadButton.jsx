import axios from 'axios'
import { Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons';
import fileDownload from 'js-file-download'

export default function DownloadButton(url, filename, buttonName) {

  const handleClick = (url, filename) => {
    axios.get(url, {
      responseType: 'blob',
    })
    .then((res) => {
      fileDownload(res.data, filename)
    })
  }

  return (
    <div style={{'backgroundColor':'white'}}>
      <Button onClick={() => handleClick(url, filename)} type='link' icon={<DownloadOutlined></DownloadOutlined>}>{buttonName}</Button>
    </div>
  );
}
