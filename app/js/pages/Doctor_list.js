import React from 'react';
import PageContainer from '../components/PageContainer';
import {
}from 'amazeui-react';
var Doctor_list = React.createClass({
   getInitialState() {
        return {
            dataSource: [],

        };
    },
    componentWillMount() {
        if (!window.fetch) {
            return console.error('fetch API is not supported!');
        }
        function checkStatus(response) {
            if (response.status >= 200 && response.status < 300) {
                return response;
            } else {
                var error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
        }



    },
    componentDidMount() {
        fetch('http://123.56.133.208:8080/myfd/doctorlist.do')
            .then(checkStatus)
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.updateDataSource(data);
            })
            .catch(error => {
                console.log('Request failed: ', error)
            });
        function checkStatus(response) {
            if (response.status >= 200 && response.status < 300) {
                return response;
            } else {
                var error = new Error(response.statusText);
                error.response = response;
                throw error;
            }

        }
       
    },
    updateDataSource(data) {
        this.setState({
            dataSource: data,
        })
    },
     getProps() {
        this.setState({
            blogTitle: dataSource[0].agencydoctorid,       
        });
    },
  render() {
    const {dataSource}  = this.state;
        var no = "无";
        var a = "";
        console.log(dataSource);
    return (
      <PageContainer>
        <link href="i/resources/css/axure_rp_page.css" type="text/css" rel="stylesheet"/>
        <link href="i/data/styles.css" type="text/css" rel="stylesheet"/>
        <link href="i/css/doctor_list/styles.css" type="text/css" rel="stylesheet"/>
        <div id="base" className="">
          <div id="u0" className="ax_shape">
            <img id="u0_img" className="img " src="i/images/doctor_list/u0.png"/>

            <div id="u1" className="text">
              <p><span></span></p>
            </div>
          </div>
          <div id="u2" className="ax_shape">
            <img id="u2_img" className="img " src="i/images/query_result/u0.png"/>

            <div id="u3" className="text">
              <p><span></span></p>
            </div>
          </div>
          <div id="u4" className="ax_shape">
            <img id="u4_img" className="img " src="i/images/query_result/u4.png"/>

            <div id="u5" className="text">
              <p><span></span></p>
            </div>
          </div>
          <div id="u6" className="ax_paragraph">
            <img id="u6_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u7" className="text">
              <p><span>类型：</span></p>
            </div>
          </div>
          <div id="u8" className="ax_paragraph">
            <img id="u8_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u9" className="text">
              <p><span>医疗机构</span></p>
            </div>
          </div>
          <div id="u10" className="ax_paragraph">
            <img id="u10_img" className="img " src="i/images/doctor_list/u10.png"/>

            <div id="u11" className="text">
              <p><span>专家</span><span>团队 </span></p>
            </div>
          </div>
          <div id="u12" className="ax_paragraph">
            <img id="u12_img" className="img " src="i/images/doctor_list/u12.png"/>

            <div id="u13" className="text">
              <p><span>不限</span></p>
            </div>
          </div>


          <div id="u14" className="ax_paragraph">
            <img id="u14_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u15" className="text">
              <p><span>地点：</span></p>
            </div>
          </div>


          <div id="u16" className="ax_paragraph">
            <img id="u16_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u17" className="text">
              <p><span>北京</span></p>
            </div>
          </div>


          <div id="u18" className="ax_paragraph">
            <img id="u18_img" className="img " src="i/images/query_result/u14.png"/>

            <div id="u19" className="text">
              <p><span>不限</span></p>
            </div>
          </div>


          <div id="u20" className="ax_horizontal_line">
            <img id="u20_start" className="img " src="i/resources/images/transparent.gif" alt="u20_start"/>
            <img id="u20_end" className="img " src="i/resources/images/transparent.gif" alt="u20_end"/>
            <img id="u20_line" className="img " src="i/images/user_home/u68_line.png" alt="u20_line"/>
          </div>


          <div id="u21" className="ax_checkbox">
            <label for="u21_input">

              <div id="u22" className="text">
                <p><span>7日内可预约</span></p>
              </div>
            </label>
            <input id="u21_input" type="checkbox" value="checkbox"/>
          </div>


          <div id="u23" className="ax_checkbox">
            <label for="u23_input">

              <div id="u24" className="text">
                <p><span>有优惠</span></p>
              </div>
            </label>
            <input id="u23_input" type="checkbox" value="checkbox"/>
          </div>


          <div id="u25" className="ax_paragraph">
            <img id="u25_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u26" className="text">
              <p><span>智能</span><span>&nbsp; </span><span> |&nbsp; 人气&nbsp; |&nbsp; 预约时间&nbsp; &nbsp; </span></p>
            </div>
          </div>


          <div id="u27" className="ax_paragraph">
            <img id="u27_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u28" className="text">
              <p><span className="u129">1</span></p>
            </div>
          </div>


          <div id="u29" className="ax_paragraph">
            <img id="u29_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u30" className="text">
              <p><span>2</span></p>
            </div>
          </div>


          <div id="u31" className="ax_paragraph">
            <img id="u31_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u32" className="text">
              <p><span>下一页</span></p>
            </div>
          </div>


          <div id="u33" className="ax_paragraph">
            <img id="u33_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u34" className="text">
              <p className="u130"><span className="u131">XXXX</span><span className="u131"> 主任</span><span className="u132">&nbsp; </span><span className="u132">&nbsp; &nbsp; &nbsp; &nbsp; </span><span className="u132">&nbsp; </span><span className="u134">人气指数 9.5</span></p><p className="u133"><span className="u132">擅长治疗: XXXX， XXXX， XXXX髌骨</span></p><p className="u133"><span className="u134">可预约地点: 北京不限地区</span></p><p className="u135"><span className="u134">最快手术时间: 预计3日内</span><span className="u141">&nbsp; </span></p>
            </div>
          </div>


          <div id="u35" className="ax_paragraph">
            <img id="u35_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u36" className="text">
              <p><span className="u140">第一</span><span className="u140">执业点： XXXX医院</span></p><p><span className="u142">荣誉：XXXX XXXXX</span></p><p><span className="u140">&nbsp; </span></p>
            </div>
          </div>


          <div id="u37" className="ax_paragraph">
            <img id="u37_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u38" className="text">
              <p className="u130"><span className="u137">XXXX</span><span className="u137"> 主任</span><span className="u137">团队</span><span className="u137">&nbsp; &nbsp; </span><span className="u139">&nbsp; </span><span className="u136">人气指数 </span><span className="u136">10</span></p><p className="u135"><span className="u139">擅长治疗: XXXX， XXXX， </span><span className="u139">关节置换</span></p><p className="u133"><span className="u138">可预约地点: 北京不限地区</span></p><p className="u135"><span className="u138">最快手术时间: 预计</span><span className="u138">5</span><span className="u138">日内</span><span className="u139">&nbsp; </span></p>
            </div>
          </div>


          <div id="u39" className="ax_paragraph">
            <img id="u39_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u40" className="text">
              <p><span>团队</span><span>拥有顶级麻醉师，护士</span></p>
            </div>
          </div>


          <div id="u41" className="ax_horizontal_line">
            <img id="u41_start" className="img " src="i/resources/images/transparent.gif" alt="u41_start"/>
            <img id="u41_end" className="img " src="i/resources/images/transparent.gif" alt="u41_end"/>
            <img id="u41_line" className="img " src="i/images/query_result/u43_line.png" alt="u41_line"/>
          </div>


          <div id="u42" className="ax_paragraph">
            <img id="u42_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u43" className="text">
              <p><span>优惠</span><span>： </span><span>预约手续</span><span></span><span>费</span><span>限时</span><span>8折</span></p>
            </div>
          </div>


          <div id="u44" className="ax_horizontal_line">
            <img id="u44_start" className="img " src="i/resources/images/transparent.gif" alt="u44_start"/>
            <img id="u44_end" className="img " src="i/resources/images/transparent.gif" alt="u44_end"/>
            <img id="u44_line" className="img " src="i/images/query_result/u43_line.png" alt="u44_line"/>
          </div>


          <div id="u45" className="ax_paragraph">
            <img id="u45_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u46" className="text">
              <p><span>优惠</span><span>：</span><span>赠合作医院复诊挂号费</span><span></span><span>&nbsp; </span></p>
            </div>
          </div>


          <div id="u47" className="ax_text_field">
            <input id="u47_input" type="text"  />
          </div>


          <div id="u48" className="ax_shape">
            <img id="u48_img" className="img " src="i/images/query_result/u55.png"/>

            <div id="u49" className="text">
              <p><span>直接预约</span></p>
            </div>
          </div>


          <div id="u50" className="ax_shape">
            <img id="u50_img" className="img " src="i/images/user_check_operation_reservation_page/u23.png"/>

            <div id="u51" className="text">
              <p><span>公司主 Logo</span></p>
            </div>
          </div>


          <div id="u52" className="ax_paragraph">
            <img id="u52_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u53" className="text">
              <p><span>手术地点：</span><span>全国</span><span>&nbsp; </span></p>
            </div>
          </div>


          <div id="u54" className="ax_paragraph">
            <img id="u54_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u55" className="text">
              <p><a id="u56" className="link" data-label="CusUserName"><span className="u144">登录</span></a><span className="u143">&nbsp; |</span><span className="u140">&nbsp; 手机APP</span><span className="u143">&nbsp; |</span><span className="u140">&nbsp; 客户服务&nbsp; </span><span className="u143">|</span><span className="u140">&nbsp; 网站导航</span></p>
            </div>
          </div>


          <div id="u57" className="ax_shape">
            <img id="u57_img" className="img " src="i/images/query_result/u64.png"/>

            <div id="u58" className="text">
              <p><span>搜索</span></p>
            </div>
          </div>


          <div id="u59" className="ax_horizontal_line">
            <img id="u59_start" className="img " src="i/resources/images/transparent.gif" alt="u59_start"/>
            <img id="u59_end" className="img " src="i/resources/images/transparent.gif" alt="u59_end"/>
            <img id="u59_line" className="img " src="i/images/user_home/u68_line.png" alt="u59_line"/>
          </div>


          <div id="u60" className="ax_horizontal_line">
            <img id="u60_start" className="img " src="i/resources/images/transparent.gif" alt="u60_start"/>
            <img id="u60_end" className="img " src="i/resources/images/transparent.gif" alt="u60_end"/>
            <img id="u60_line" className="img " src="i/images/user_home/u68_line.png" alt="u60_line"/>
          </div>


          <div id="u61" className="ax_shape">
            <img id="u61_img" className="img " src="i/images/query_result/u68.png"/>

            <div id="u62" className="text">
              <p><span>立即预约</span></p>
            </div>
          </div>


          <div id="u63" className="ax_image">
            <img id="u63_img" className="img " src="i/images/query_result/u70.png"/>

            <div id="u64" className="text">
              <p><span></span></p>
            </div>
          </div>


          <div id="u65" className="ax_shape">
            <img id="u65_img" className="img " src="i/images/query_result/u68.png"/>

            <div id="u66" className="text">
              <p><span>立即预约</span></p>
            </div>
          </div>


          <div id="u67" className="ax_image">
            <img id="u67_img" className="img " src="i/images/query_result/u76.png"/>

            <div id="u68" className="text">
              <p><span></span></p>
            </div>
          </div>


          <div id="u69" className="ax_dynamic_panel">
            <div id="u69_state0" className="panel_state" data-label="State1">
              <div id="u69_state0_content" className="panel_state_content">


                <div id="u70" className="ax_shape">
                  <img id="u70_img" className="img " src="i/images/query_result/u81.png"/>

                  <div id="u71" className="text">
                    <p><span></span></p>
                  </div>
                </div>


                <div id="u72" className="ax_paragraph">
                  <img id="u72_img" className="img " src="i/resources/images/transparent.gif"/>

                  <div id="u73" className="text">
                    <p><span>创伤</span></p>
                  </div>
                </div>


                <div id="u74" className="ax_paragraph">
                  <img id="u74_img" className="img " src="i/resources/images/transparent.gif"/>

                  <div id="u75" className="text">
                    <p><span>脊椎</span></p>
                  </div>
                </div>


                <div id="u76" className="ax_paragraph">
                  <img id="u76_img" className="img " src="i/resources/images/transparent.gif"/>

                  <div id="u77" className="text">
                    <p><span>儿骨</span></p>
                  </div>
                </div>


                <div id="u78" className="ax_shape">
                  <img id="u78_img" className="img " src="i/images/query_result/u89.png"/>

                  <div id="u79" className="text">
                    <p><span></span></p>
                  </div>
                </div>


                <div id="u80" className="ax_shape">
                  <img id="u80_img" className="img " src="i/images/query_result/u89.png"/>

                  <div id="u81" className="text">
                    <p><span></span></p>
                  </div>
                </div>


                <div id="u82" className="ax_shape">
                  <img id="u82_img" className="img " src="i/images/query_result/u89.png"/>

                  <div id="u83" className="text">
                    <p><span></span></p>
                  </div>
                </div>


                <div id="u84" className="ax_paragraph">
                  <img id="u84_img" className="img " src="i/resources/images/transparent.gif"/>

                  <div id="u85" className="text">
                    <p><span>关节</span></p>
                  </div>
                </div>


                <div id="u86" className="ax_shape">
                  <img id="u86_img" className="img " src="i/images/query_result/u89.png"/>

                  <div id="u87" className="text">
                    <p><span></span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div id="u88" className="ax_horizontal_line">
            <img id="u88_start" className="img " src="i/resources/images/transparent.gif" alt="u88_start"/>
            <img id="u88_end" className="img " src="i/resources/images/transparent.gif" alt="u88_end"/>
            <img id="u88_line" className="img " src="i/images/query_result/u99_line.png" alt="u88_line"/>
          </div>


          <div id="u89" className="ax_shape">
            <img id="u89_img" className="img " src="i/images/query_result/u100.png"/>

            <div id="u90" className="text">
              <p><span>全部症状</span></p>
            </div>
          </div>


          <div id="u91" className="ax_paragraph">
            <img id="u91_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u92" className="text">
              <p><span>医生团队</span></p>
            </div>
          </div>


          <div id="u93" className="ax_paragraph">
            <img id="u93_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u94" className="text">
              <p><span>合作机构</span></p>
            </div>
          </div>


          <div id="u95" className="ax_paragraph">
            <img id="u95_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u96" className="text">
              <p><span>首页</span></p>
            </div>
          </div>


          <div id="u97" className="ax_shape">
            <img id="u97_img" className="img " src="i/images/query_result/u108.png"/>

            <div id="u98" className="text">
              <p><span></span></p>
            </div>
          </div>


          <div id="u99" className="ax_shape">
            <img id="u99_img" className="img " src="i/images/index_home/u13.png"/>

            <div id="u100" className="text">
              <p><span>banner</span></p>
            </div>
          </div>


          <div id="u101" className="ax_paragraph">
            <img id="u101_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u102" className="text">
              <p><span>上海</span></p>
            </div>
          </div>


          <div id="u103" className="ax_paragraph">
            <img id="u103_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u104" className="text">
              <p><span>广州</span></p>
            </div>
          </div>


          <div id="u105" className="ax_paragraph">
            <img id="u105_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u106" className="text">
              <p><span>赤峰</span></p>
            </div>
          </div>


          <div id="u107" className="ax_paragraph">
            <img id="u107_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u108" className="text">
              <p className="u130"><span className="u131">XXXX</span><span className="u131"> 主任</span><span className="u132">&nbsp; </span><span className="u132">&nbsp; &nbsp; &nbsp; &nbsp; </span><span className="u132">&nbsp; </span><span className="u134">人气指数 9.5</span></p><p className="u133"><span className="u132">擅长治疗: </span><span className="u132">脊椎</span><span className="u132">， XXXX，</span></p><p className="u133"><span className="u134">可预约地点: 北京不限地区</span></p><p className="u135"><span className="u134">最快手术时间: 预计3日内</span><span className="u141">&nbsp; </span></p>
            </div>
          </div>


          <div id="u109" className="ax_paragraph">
            <img id="u109_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u110" className="text">
              <p><span className="u140">第一</span><span className="u140">执业点： XXXX医院</span></p><p><span className="u142">荣誉：XXXX XXXXX</span></p><p><span className="u143">&nbsp; </span></p>
            </div>
          </div>
          <div id="u111" className="ax_horizontal_line">
            <img id="u111_start" className="img " src="i/resources/images/transparent.gif" alt="u111_start"/>
            <img id="u111_end" className="img " src="i/resources/images/transparent.gif" alt="u111_end"/>
            <img id="u111_line" className="img " src="i/images/query_result/u43_line.png" alt="u111_line"/>
          </div>
          <div id="u112" className="ax_paragraph">
            <img id="u112_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u113" className="text">
              <p><span>优惠</span><span>： </span><span>赠送康复礼包</span></p>
            </div>
          </div>
          <div id="u114" className="ax_shape">
            <img id="u114_img" className="img " src="i/images/query_result/u68.png"/>

            <div id="u115" className="text">
              <p><span>立即预约</span></p>
            </div>
          </div>
          <div id="u116" className="ax_image">
            <img id="u116_img" className="img " src="i/images/doctor_list/u116.png"/>

            <div id="u117" className="text">
              <p><span></span></p>
            </div>
          </div>


          <div id="u118" className="ax_hot_spot">
          </div>


          <div id="u119" className="ax_hot_spot">
          </div>


          <div id="u120" className="ax_horizontal_line">
            <img id="u120_start" className="img " src="i/resources/images/transparent.gif" alt="u120_start"/>
            <img id="u120_end" className="img " src="i/resources/images/transparent.gif" alt="u120_end"/>
            <img id="u120_line" className="img " src="i/images/user_home/u68_line.png" alt="u120_line"/>
          </div>


          <div id="u121" className="ax_paragraph">
            <img id="u121_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u122" className="text">
              <p><span>关于我们</span></p>
            </div>
          </div>


          <div id="u123" className="ax_paragraph">
            <img id="u123_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u124" className="text">
              <p><span>联系我们</span></p>
            </div>
          </div>


          <div id="u125" className="ax_paragraph">
            <img id="u125_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u126" className="text">
              <p><span>服务条款</span></p>
            </div>
          </div>


          <div id="u127" className="ax_paragraph">
            <img id="u127_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u128" className="text">
              <p><span>媒体更新</span></p>
            </div>
          </div>
        </div>

      </PageContainer>
    );
  }
});
export default Doctor_list;

