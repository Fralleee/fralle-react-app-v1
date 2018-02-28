# fralle-react-app
Live: (https://www.fralle.com)

# Todo fralle.com:
- Fix markup viewer
- Fix coderenderer or better option to display code
- Publish code on github

# fralle.com v3:
- Minimalistic design
- Wrapped in 980px
- No 100vh sections
- No carousel
- Large projects: ProjectPage (websites, games, apps, scripts (commercial))
- Other: Default project page with markdown reader from github readme.md
- Keywords: Compact, Professional, Minimalistic
- Pages: Index, About, Project (dynamic + custom renderer)
- Sections(index): Header, Welcome, Work, About, Footer

# Github API
const instance = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 1000,
  headers: { Accept: 'application/vnd.github.v3+json' }
})

instance.get('/users/Fralleee/repos').then(res => {
  const data = res.data.filter(x => !x.fork)
  const mappedData = data.map(item => ({ name: item.name, description: item.description }))
  console.log(mappedData)
  mappedData.forEach(item => {
    instance.get(`/repos/Fralleee/${item.name}/readme`).then(res2 => console.log(atob(res2.data.content)))
  })
})

# Project content (old, needs to be refactored)
- Meta data:
  - Title
  - SubTitle (ACTION / RTS || WEB APP)
  - Category (GAME || WEB) 
  - LastUpdated
  - Links (arr[])
- Content
  - Markdown file
  - Images (sizes in px):
      Base64 string max 2kb
      Link: 480x768
      Flickity: 480x270, 960x720, 1366x768, 1920x1080
      Markdown: 720xANY
