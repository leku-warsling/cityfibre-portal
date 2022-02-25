const http = require('axios');
const {
  keys,
  pipe,
  map,
  prop,
  andThen: then,
  constructN,
  pick,
  both,
  includes,
  bind,
  filter,
  applySpec,
  pathOr,
  propOr,
  curry,
} = require('ramda');
const fs = require('fs');
const { isNotNilOrEmpty } = require('ramda-adjunct');
const deps = require('../package');
const path = require('path');

const toPath = (_path) => path.join(process.cwd(), _path);
const { dependencies, devDependencies } = deps;
const NPM_URI = 'https://registry.npmjs.org/';
const GITHUB_URI = 'https://api.github.com/repos';
const promiseAll = bind(Promise.all, Promise);
const toURL = constructN(1, URL);
const getData = prop('data');
const contains = (str) => both(isNotNilOrEmpty, includes(str));
const hasGithubDomain = contains('github.com');

const repoSpec = pick([
  'stargazers_count',
  'has_wiki',
  'topics',
  'has_pages',
  'language',
]);

const infoSpec = applySpec({
  name: prop('name'),
  description: prop('description'),
  homepage: prop('homepage'),
  license: prop('homepage'),
  tags: prop('dist-tags'),
  repository: pathOr(null, ['repository', 'url']),
  keywords: propOr([], 'keywords'),
});

const get = curry((baseUrl, pathname) => {
  if (!pathname) return Promise.resolve(undefined)
  return http.get(`${baseUrl}${pathname}`).then(getData).catch(console.log);
})

const fetchPackage = get(NPM_URI)
const fetchRepository = get(GITHUB_URI)

const fetchAllPackages = pipe(
  keys,
  map(fetchPackage),
  promiseAll,
  then(map(infoSpec))
);

const fetchAllRepositories = pipe(
  map(prop('url')),
  filter(hasGithubDomain),
  map(pipe(toURL, prop('pathname'), fetchRepository)),
  promiseAll
);

const outputJSON = (filePath) => {
  return (json) => {
    fs.writeFile(toPath(filePath), JSON.stringify(json), console.log);
  };
};

fetchAllPackages({ ...dependencies, ...devDependencies }).then(
  outputJSON('data/package-report.json')
);

const keywords = [
  "Animation",
  "Polyfill",
  "Fonts",
  "Tools",
  "Frameworks",
  "Styling",
  "Testing",
  "Code Quality",
  "Validation",
  "Visualizations",
  "Routing",
  "Http",
  "State Management",
  "Icons",
  "UI Components",
  "Monorepo",
  "Performance",
  "Utillity"
]