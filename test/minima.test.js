import { lstatSync } from 'fs'
import { join } from 'path'

import test from 'ava'

const dist = join(__dirname, '../dist')

test.before('`dist` path should be created', t => {
	t.true(lstatSync(dist).isDirectory())
})

test('`minima.css` should be created', t => {
  const filename = join(dist, 'minima.css')
  t.true(lstatSync(filename).isFile())
})

test('`minima.css.map` should be created', t => {
  const filename = join(dist, 'minima.css.map')
  t.true(lstatSync(filename).isFile())
})

test('`minima.min.css` should be created', t => {
  const filename = join(dist, 'minima.min.css')
  t.true(lstatSync(filename).isFile())
})

test('`minima.min.css.map` should be created', t => {
  const filename = join(dist, 'minima.min.css.map')
  t.true(lstatSync(filename).isFile())
})
