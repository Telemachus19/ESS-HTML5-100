# SharedWorker Vs WebWorker
an Extremely concise report.

# Core Concept

* Web Worker: runs in a separate thread, linked specifically to the **single script/tab** that created it. It cannot be accessed by other tabs.
* Shared Worker: runs in a separate thread but can be accessed by **multiple scripts, tabs, or iframes** (as long as they share the same origin).

# Communication Logic

* **WebWorker:** 
  * You speak directly to the worker through `postMessage`
* **Shared:** 
  * It's a cmmunication via connection, must first connect via a port and then talk through that port


# Use Cases

* WebWorker
  * Heavy computations for a single page (image processing, large array sorting, ...,etc).
  * Offloading UI-blocking tasks.

* SahredWorker
  * Synchronizing data between multiple open tabs (e.g., a shopping cart or chat session).
  * Maintaining a single WebSocket connection shared across multiple tabs to save server resources.


#### 2. Key Differences Table

| Feature            | Dedicated Web Worker                                 | Shared Worker                                                   |
| ------------------ | ---------------------------------------------------- | --------------------------------------------------------------- |
| **Accessibility**  | Accessible only by the parent script that called it. | Accessible by multiple tabs/windows of the same origin.         |
| **Lifespan**       | Terminates when the parent tab is closed.            | Remains active as long as at least one tab is connected to it.  |
| **Communication**  | Direct messaging                                     | Communication via **Ports**                                     |
| **Initialization** | `new Worker("script.js")`                            | `new SharedWorker("script.js")`                                 |
| **Complexity**     | Simple setup.                                        | Higher complexity (requires managing active connections/ports). |