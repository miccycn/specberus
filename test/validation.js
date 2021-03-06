/**
 * Test HTML and CSS checkers.
 *
 * This file is not runnable by Mocha directly; it is used by "rules.js".
 *
 * HTML and CSS validations often time out, and Travis CI thinks the build is broken when it happens.
 * Therefore, we only add these test cases when testing locally.
 * See <a href="https://github.com/w3c/spartacus/issues/164">w3c/spartacus#164</a> and
 * <a href="http://docs.travis-ci.com/user/ci-environment/#Environment-variables">Travis documentation</a>.
 */

if (!process || !process.env || (process.env.TRAVIS !== 'true' && !process.env.SKIP_NETWORK)) {
    exports.css = [
        {doc: 'validation/simple.html', ignoreWarnings: true}
    ,   {doc: 'validation/css.html', ignoreWarnings: true}
    ,   {doc: 'validation/bad-css.html', errors: ['validation.css', 'validation.css'], ignoreWarnings: true}
    ];
    exports.html = [
        {doc: 'validation/simple.html'}
    ,   {doc: 'validation/invalid.html', errors: ['validation.html']}
    ];
}
