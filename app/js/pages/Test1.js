import React from 'react';
import PageContainer from '../components/PageContainer';
import { render } from 'react-dom';
import {
    Grid,
    Col,
    Form,
    Input,
    Thumbnail,
    Image,
    Icon,
    Button,
    Panel,
} from 'amazeui-react';
var Test1 = React.createClass({
    render() {
        return (
            <div>
                <link href="i/css/test/styles.css" type="text/css" rel="stylesheet"/>
                <Grid>
                    <Col sm={1}><Image
                        src="i/images/institution_list/u110.png"
                        width="120"
                        height="140"
                        radius />
                    </Col>
                    <Col sm={11}>
                        <div>
                            &nbsp; &nbsp; &nbsp; <span className="u1">XXX</span> &nbsp; <span className="u1">医院</span>，<sapn className="u2">人气指数</sapn> &nbsp; <sapn className="u2">9</sapn><br/>
                            &nbsp; &nbsp; &nbsp; <span className="u2">地点：北京宣武区  </span><span>&nbsp; 三甲</span><br/>
                            &nbsp; &nbsp; &nbsp; <span className="u2">可预约专家：知名三甲医院骨科高职及以上</span><br/>
                            &nbsp; &nbsp; &nbsp; <span className="u2" >最快手术时间： 1日内</span><br/>
                            &nbsp; &nbsp; &nbsp; <span className="u2">床位：充足</span><br/>
                            &nbsp; &nbsp; &nbsp; <img id="u87_line" className="img " src="i/images/query_result/u43_line.png" alt="u87_line"/><br/>
                            &nbsp; &nbsp; &nbsp; <span className="u2">优惠：单间8折，免费加陪护床</span>




                        </div>
                    </Col>
                </Grid>
            </div>
        );
    }
})
export default Test1;