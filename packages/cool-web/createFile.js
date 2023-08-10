// import { camelCase, upperFirst } from 'lodash'
const lodash = require('lodash')
const fs = require('fs')

const { camelCase, upperFirst } = lodash

const dirs = fs.readdirSync(`${__dirname}/public/locales/cn`)
// console.log(dirs)


const getString = (str) => {
  const name = upperFirst(camelCase(str))
  return `import React, { memo } from 'react';
  import { useTranslation } from 'next-i18next';

  function ${name}() {
    const { t } = useTranslation(['${str}']);
    return (
      <>
        <div className="px-4 lg:px-8  text-black">
          <div className="bg-gradient-to-r from-sky-500 to-indigo-500 py-16 rounded-3xl px-4 lg:px-8 filter ">
            <div className="mx-auto max-w-screen-2xl ">{t('title')}</div>
          </div>
        </div>
      </>
    );
  }

  export default memo(${name});
  `
}

console.log(dirs.map(item => {
  const [name] = item.split('.')
  // console.log(name)
  // fs.writeFileSync(`${__dirname}/src/temp/${name}.tsx`, getString(name))
  return `import ${upperFirst(camelCase(name))} from '@components/${name}';`

}).join('\n'))

console.log('\n\n\n')

console.log(dirs.map(item => {
  const [name] = item.split('.')
  // console.log(name)
  // fs.writeFileSync(`${__dirname}/src/temp/${name}.tsx`, getString(name))
  return `<${upperFirst(camelCase(name))}></${upperFirst(camelCase(name))}>`

}).join('\n'))