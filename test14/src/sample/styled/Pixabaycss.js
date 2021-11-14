import styled from 'styled-components';

export const Container = styled.div`
width: 1400px; margin: auto;
`

export const ImageItem = styled.article`
    width: 430px; margin-bottom: 60px;
    border: 1px solid #999;
    padding: 20px 15px 35px;
    img {width:400px; margin-bottom:15px;}
    h3 {font-size:25px; color:tomato; font-weight:600;
    margin-bottom:20px}
    ul {
        li{margin-bottom:5px;
            em{display: inline-block; width: 80px;}
        }
    }
    p {margin-top:20px;
        span{margin-right:10px;}
        }
`    

export const ImageContainer = styled.div`

.my-masonry-grid {
  display: -webkit-box; /* Not needed if autoprefixing */
  display: -ms-flexbox; /* Not needed if autoprefixing */
  display: flex;
  margin-left: -30px; /* gutter size offset */
  width: auto;
}
.my-masonry-grid_column {
  padding-left: 30px; /* gutter size */
  background-clip: padding-box;
}

/* Style your items */
.my-masonry-grid_column > div { 
 /* change div to reference your elements you put in <Masonry> */
  background: grey;
  margin-bottom: 30px;
}

`

export const ImageForm = styled.form`
text-align: center;
padding: 30px;
input {
    width: 400px;
    height: 45px;
    padding: 0 15px;
    box-sizing: border-box;
    border: 1px solid #999;
    vertical-align: top;
}
button {
    width: 100px; 
    height: 45px; 
    background: black;
    color:#fff;
    border: none;
    margin-left: 5px;
}

`