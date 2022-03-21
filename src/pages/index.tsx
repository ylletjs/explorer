import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Editor from '@monaco-editor/react';
import { useClient } from '@yllet/react';

const App = () => {
  const [method, setMethod] = useState('get');
  const [find, setFind] = useState('');
  const [code, setCode] = useState('');
  const [url, setURL] = useState('https://wordpress.org/wp-json');
  const [path, setPath] = useState('');
  const [base, setBase] = useState('/wp-json');
  const [namespace, setNamespace] = useState('wp/v2');
  const [routes, setRoutes] = useState({});
  const client = useClient(url);

  const setFullUrl = useCallback((url: string) => {
    const u = new URL(url);
    const r1 = /(\/[a-zA-Z0-9_-]+)/.exec(u.pathname);
    // base
    const b = (r1 && r1.length ? r1[0] : '').replace('/', '');
    u.pathname = u.pathname.replace('/' + b, '');
    const r2 = /(\w+(?:\/(\w+)|))/.exec(u.pathname);
    // namespace
    const n = (r2 && r2.length ? r2[0] : '').replace(/^\//, '');
    const p = u.pathname.replace('/' + n, '');
    setURL('https://' + u.hostname.replace(/\/$/, '') + '/' + b);
    setBase(b);
    setNamespace(n);
    setPath(p);
  }, []);

  let codeExample = `client.${method.toLowerCase()}('${
    path ? path : '/'
  }').then(response => {
  console.log(response);
});`;

  for (var key in client) {
    if (path === key) {
      codeExample = `client.${key}().${method.toLowerCase()}().then(response => {
  console.log(response);
});`;
    }
  }

  const request = (p: string) => {
    p = p.replace(base, '');
    p = p.replace('/' + namespace, '');
    let n = namespace;
    if (namespace === '') {
      n = p.replace(/^\//, '');
      p = '/';
    } else {
      p = p.replace(/^\//, '');
    }
    setPath(p.replace(/^\//, ''));
    client
      .endpoint(url)
      .namespace(n)
      .request(method, p)
      .then((r) => {
        setNamespace(n);
        const t = JSON.stringify(r, null, 2);
        setCode(t);
        if (r.routes) {
          setRoutes(r.routes);
        }
      })
      .catch((err) => {
        const t = JSON.stringify({ error: err }, null, 2);
        setCode(t);
      });
  };

  useEffect(() => {
    client.get('/').then((r) => {
      const t = JSON.stringify(r, null, 2);
      setCode(t);
      setRoutes(r.routes);
    });
  }, [client]);

  return (
      <div className="flex">
        <div>
          <Sidebar onSearch={setFind}>
            <ul className="cursor-pointer text-gray-500 overflow-scroll" style={{height:'86vh'}}>
              {Object.keys(routes)
                .filter((m) => (find ? m.indexOf(find) !== -1 : true))
                .map((m, mi) => {
                  const r = routes[m];
                  const active = path === '/' ? mi === 0 : m === path;
                  return (
                    <li
                      key={mi}
                      onClick={() => request(m)}
                      className={
                        'flex hover:bg-gray-800 hover:border-gray-600 mb-2 pl-4 py-2 border-l-4 border-solid ' +
                        (active
                          ? 'border-gray-600 bg-gray-800'
                          : 'border-transparent')
                      }
                    >
                      <span>{m}</span>
                    </li>
                  );
                })}
            </ul>
          </Sidebar>
        </div>
        <div className="flex-auto">
         <Navbar className="pt-4">
            <div className="lg:flex lg:justify-start">
              <ul className="list-reset flex">
                <li className="mr-1">
                  <a
                    className="bg-white text-gray-800 inline-block py-1 px-4 text-blue-dark font-semibold"
                    href="#"
                  >
                    Explorer
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:flex lg:items-stretch lg:justify-end ml-auto"></div>
          </Navbar>
          <div className="w-full h-screen">
            <div className="flex flex-wrap p-2 bg-gray-200 border-b border-solid border-gray-400">
              <div className="w-1/6">
                <select
                  className="bg-white mt-1"
                  onChange={(e) => setMethod(e.target.value.toLowerCase())}
                >
                  <option>DELETE</option>
                  <option selected>GET</option>
                  <option>PUT</option>
                  <option>POST</option>
                </select>
              </div>
              <div className="w-4/6">
                <input
                  type="text"
                  className="w-full py-1 px-2"
                  value={
                    url +
                    (namespace ? '/' + namespace : '') +
                    (path ? '/' + path : '')
                  }
                  onChange={(e) => setFullUrl(e.target.value)}
                />
              </div>
              <div className="w-1/6">
                <button
                  onClick={() => request(path)}
                  className="ml-12 bg-gray-900 hover:bg-gray-800 text-white font-bold py-1 px-4 rounded"
                >
                  Request
                </button>
              </div>
            </div>
            <div className="w-full">
              <Editor height="50vh" language="json" value={code} />
            </div>
            <div className="w-full">
              <Navbar>
                <div className="p-2 text-xs">Code example</div>
              </Navbar>
              <Editor
                height="40vh"
                language="javascript"
                value={`
// Yllet version 3.0.0
import Client from '@yllet/client';

const client = new Client('${url}');

${codeExample.trim()}
              `.trim()}
              />
            </div>
          </div>
        </div>
    </div>
  );
};

export default App;
