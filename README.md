# Movie Service Application
![](https://img.shields.io/badge/-HTML5-F1662B)
![](https://img.shields.io/badge/-CSS3-2FA9DC)
![](https://img.shields.io/badge/-JavaScript-E3A127)
![](https://img.shields.io/badge/-React-61DAFB)  

`React를 사용하여 제작한 Movie Service Application 입니다.`  

## ✨ Preview
![preview](https://user-images.githubusercontent.com/74370531/109858588-56a17c00-7c9f-11eb-8bb9-a905961df5f6.jpg)  

## 🔎 File Description
* 📁 Routes
  * 📄 Home.js : 홈(메인) 페이지
    * state
    * container(loading, home)
```js
// axios를 사용하여 API를 받아온다. => movies 배열 fecth
getMovies = async () => {
  const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
  this.setState({movies, isLoading: false});
};
```
  * 📄 Detail.js : movie 상세 정보 페이지
  * 📄 About.js : about 페이지
* 📁 Components
  * 📄 Navigation.js : 상단 메뉴
  * 📄 Movie.js : movie  

## 🔧 Install
```
npm install
```  

## 🚀 Usage
```
npm start
```  

## 👤 Author
**Yujin Hong**
* Email : hongyujin0216@gmail.com
* Github : [@devjindev](https://github.com/devjindev)
* Blog : [진개발연구소](https://devjindev.tistory.com/)  

## 📝 License
MIT © Yujin Hong  

.  

.  

.  

##### 본 프로젝트는 <노마드코더 - 'React Fundamentals 2019'> 을 참고하여 제작하였습니다.
