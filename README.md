# :earth_americas: Get Repositories From Github Api :earth_americas:

---

![ReactJs](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Html5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Css3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![React-Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Styled-Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

---

## :pushpin: Requirements: :pushpin:

ReactJs: :link: https://pt-br.reactjs.org/

NodeJs: :link: https://nodejs.org/en/


---
#### :arrow_forward:   Get Started: 

  1. Clone this repo
   ```sh
   git clone https://github.com/Aleydon/Repositories.git
   ```
  2. Install NPM packages
   ```sh
   npm install or yarn install
   ```
   3. Run this project
   ```sh
   npm start or yarn start
   ```
---  


<h4>:mag: search the repositories:</h4> 

![Search-Repositories](images/added_repositorie.png)


<h5>:exclamation:Returns an error message if the repository is not found.</h5>

![Repositories-Not-Found](images/repo_not_found.png)


<h4> :floppy_disk: This application stores the repositories in localStorage:</h4>

```js
  useEffect(() => {
    localStorage.setItem('@favorite/repos', JSON.stringify(repositories));
  }, [repositories]);  
```

<h4>:x: repository  remove:</h4>

```js
 const handleDeleteRepository = useCallback(
    (repo) => {
      const repoDelete = repositories.filter(
        (filtered) => filtered.name !== repo,
      );
      setRepositories(repoDelete);
      localStorage.removeItem(repoDelete);
    },
    [repositories],
  );
```
<h4>:mag_right: Functional filter and navigation:</h4>

![Filter-Pagination](images/View_issues_and_pagination.png)
