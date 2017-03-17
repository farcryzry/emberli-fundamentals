import Ember from 'ember';

export function placeholderUrl(params, hash) {
  const options = hash || {};
  const w = Math.max(options.w || 100, 10);
  const h = Math.max(options.h || 120, 10);

  return `http://placekitten.com/${w}/${h}`;
}

export default Ember.Helper.helper(placeholderUrl);