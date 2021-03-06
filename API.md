# API


<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>
<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="transpose"><span class="type-signature"></span>transpose<span class="signature">(a, b)</span><span class="type-signature"> &rarr; {String|Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Transposes a pitch by an interval</p>
<p>This function is curryfied, so you can partially applied (see example)</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>a</code></td>
<td class="type">
<span class="param-type">String</span>
|
<span class="param-type">Array</span>
</td>
<td class="description last"><p>a pitch or interval in string or array notation</p></td>
</tr>
<tr>
<td class="name"><code>b</code></td>
<td class="type">
<span class="param-type">String</span>
|
<span class="param-type">Array</span>
</td>
<td class="description last"><p>a pitch or interval in string or array notation</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music.note.transpose/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/danigb/music.note.transpose/blob/master/index.js#L19">lineno 19</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the transposed pitch</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">String</span>
|
<span class="param-type">Array</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>transpose('3m', 'C4') // => 'Eb4'
transpose('C4', '3m') // => 'Eb4'
tranpose([1, 0, 2], [3, -1, 0]) // => [3, 0, 2]
['C', 'D', 'E'].map(transpose('3M')) // => ['E', 'F#', 'G#']</code></pre>
</dd>
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->
