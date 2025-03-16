export default {
  match: 'host',
  value: location.host,

  list: [
    { host: 'theoliveoli.blahaj.land', username: 'theoliveoli' }
  ],

  defaultWidget: `
      <div class="AeroRing">
        <a href="https://theoliveoli.blahaj.land/aeroring.html">This site hasn't joined AeroRing yet. Join now!<a>
      </div>
    `,

  widget: `
      <div class="AeroRing">
        <a href="https://{prev.host}">
		&lt
		</a>
    <a href="https://{random.host}">
		AeroRing!
		</a>
        <a href="https://{next.host}">
		&gt
		</a>
      </div>
    `,

  style: `
      :webring {
        padding:10px;
        position:relative;  

        div {
          display: flex;
          gap: 6px;
          justify-content: space-around;
        }

        p {
          text-align: center;
        }

        div a:last-child {
          text-align: right;
        }

        &.afterdark {
          font-family: Arial, sans-serif;
          background: #141414;
          color: #cbcbcd;
  
          a { color: #52eea3 }
        }

        &.brat {
          background:#8ACE00;
          font-family:Arial Narrow;
          color:black;

          & > * {
            filter:blur(0.5px)
          }
        }
      }
    `
}