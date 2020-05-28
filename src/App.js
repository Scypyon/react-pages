import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const result = await axios.get("http://localhost:1337/pages");
    console.log(result);
    setData(result.data);
  }, []);
  return (
    <section class="gh-canvas">
      <header class="gh-canvas-header post-header">
        <h2 class="gh-canvas-title">
          <a href="#/posts/" id="ember394" class="active ember-view">
            Posts
          </a>
        </h2>

        <section class="view-actions">
          <div class="gh-contentfilter">
            <div
              id="ember395"
              class="gh-contentfilter-menu gh-contentfilter-type  ember-view"
            >
              <div
                class="ember-view ember-basic-dropdown-trigger  ember-power-select-trigger gh-contentfilter-menu-trigger"
                role="button"
                tabindex="0"
                data-ebd-id="ember396-trigger"
                aria-owns="ember-basic-dropdown-content-ember396"
              >
                <span class="ember-power-select-selected-item">All posts</span>
                <svg viewBox="0 0 26 17">
                  <path
                    d="M.469.18l11.5 13.143L23.469.18"
                    transform="translate(1 2)"
                    stroke-width="3"
                    stroke="#0B0B0A"
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>

              <div
                id="ember-basic-dropdown-content-ember396"
                class="ember-basic-dropdown-content-placeholder"
              ></div>
            </div>

            <div
              id="ember402"
              class="gh-contentfilter-menu gh-contentfilter-author  ember-view"
            >
              <div
                class="ember-view ember-basic-dropdown-trigger  ember-power-select-trigger gh-contentfilter-menu-trigger"
                role="button"
                tabindex="0"
                data-ebd-id="ember403-trigger"
                aria-owns="ember-basic-dropdown-content-ember403"
              >
                <span class="ember-power-select-selected-item">
                  All authors
                </span>
                <svg viewBox="0 0 26 17">
                  <path
                    d="M.469.18l11.5 13.143L23.469.18"
                    transform="translate(1 2)"
                    stroke-width="3"
                    stroke="#0B0B0A"
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>

              <div
                id="ember-basic-dropdown-content-ember403"
                class="ember-basic-dropdown-content-placeholder"
              ></div>
            </div>

            <div
              id="ember409"
              class="gh-contentfilter-menu gh-contentfilter-tag  ember-view"
            >
              <div
                class="ember-view ember-basic-dropdown-trigger  ember-power-select-trigger gh-contentfilter-menu-trigger"
                role="button"
                tabindex="0"
                data-ebd-id="ember410-trigger"
                aria-owns="ember-basic-dropdown-content-ember410"
              >
                <span class="ember-power-select-selected-item">All tags</span>
                <svg viewBox="0 0 26 17">
                  <path
                    d="M.469.18l11.5 13.143L23.469.18"
                    transform="translate(1 2)"
                    stroke-width="3"
                    stroke="#0B0B0A"
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>

              <div
                id="ember-basic-dropdown-content-ember410"
                class="ember-basic-dropdown-content-placeholder"
              ></div>
            </div>

            <div
              id="ember416"
              class="gh-contentfilter-menu gh-contentfilter-sort ember-view"
            >
              <div
                class="ember-view ember-basic-dropdown-trigger  ember-power-select-trigger gh-contentfilter-menu-trigger"
                role="button"
                tabindex="0"
                data-ebd-id="ember417-trigger"
                aria-owns="ember-basic-dropdown-content-ember417"
              >
                <span class="ember-power-select-selected-item">Newest</span>
                <svg viewBox="0 0 26 17">
                  <path
                    d="M.469.18l11.5 13.143L23.469.18"
                    transform="translate(1 2)"
                    stroke-width="3"
                    stroke="#0B0B0A"
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>

              <div
                id="ember-basic-dropdown-content-ember417"
                class="ember-basic-dropdown-content-placeholder"
              ></div>
            </div>
          </div>

          <a
            href="#/editor/post/"
            id="ember423"
            class="ember-view gh-btn gh-btn-green"
          >
            <span>New post</span>
          </a>
        </section>
      </header>

      <section class="content-list">
        <ol class="posts-list gh-list ">
          <li class="gh-list-row header">
            <div class="gh-list-header no-padding"></div>
            <div class="gh-list-header gh-posts-title-header">Title</div>
            <div class="gh-list-header gh-posts-status-header">Status</div>
            <div class="gh-list-header gh-posts-lastupdate-header">
              Last update
            </div>
          </li>

          {data.length > 0 &&
            data.map((el) => (
              <li id={el.id} class="gh-list-row gh-posts-list-item ember-view">
                <a
                  title="Edit this post"
                  href="#/editor/post/5ece846db3ba630384af7bd6/"
                  id="ember425"
                  class="ember-view permalink gh-list-data gh-post-list-featured"
                ></a>

                <a
                  title="Edit this post"
                  href="#/editor/post/5ece846db3ba630384af7bd6/"
                  id="ember426"
                  class="ember-view permalink gh-list-data gh-post-list-title"
                >
                  <h3 class="gh-content-entry-title">{el.Title}</h3>
                  <p>
                    <span class="gh-content-entry-meta">
                      By <span class="midgrey-l2 fw5">Scypyon</span>
                      in <span class="midgrey-l2 fw5">{el.Description}</span>
                    </span>
                  </p>
                </a>

                <a
                  title="Edit this post"
                  href="#/editor/post/5ece846db3ba630384af7bd6/"
                  id="ember427"
                  class="ember-view permalink gh-list-data gh-post-list-status"
                >
                  <div class="flex items-center">
                    <span
                      class="gh-content-status-published nowrap"
                      title="Post has been sent by email"
                    >
                      Published
                    </span>
                  </div>
                </a>

                <a
                  title="Edit this post"
                  href="#/editor/post/5ece846db3ba630384af7bd6/"
                  id="ember428"
                  class="ember-view permalink gh-list-data gh-post-list-updated"
                >
                  <span class="nowrap">5 minutes ago</span>
                </a>
              </li>
            ))}
        </ol>

        <div
          data-test-infinity-loader=""
          id="ember459"
          class="infinity-loader reached-infinity in-viewport ember-view"
        ></div>
      </section>
    </section>
  );
}

export default App;
