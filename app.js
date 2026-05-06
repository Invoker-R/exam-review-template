const ratings = [
  { id: "good", label: "好", className: "good" },
  { id: "medium", label: "中", className: "medium" },
  { id: "weak", label: "较差", className: "weak" },
];

const modules = [
  {
    id: "picture",
    title: "图片描述",
    scope: "students",
    note: "A、B 同学分别点评",
    remarks: {
      good: [
        "你们对图片主体的把握是准确的，上来先把画面里最核心的人物或场景交代清楚，听众很容易就能进入画面状态。",
        "这组的描述有细节支撑，对人物动作、表情和环境氛围的观察比较到位，画面感是有的。",
        "你们没有停留在简单罗列元素上，而是把主体、环境和状态联系起来描述，这个层次感是这组做得比较好的地方。",
        "描述的推进顺序比较清晰，从整体画面自然过渡到关键细节，表达的层次是有的。",
        "你们选取了图中信息量比较强的细节，这些细节为后续的关系判断和主题表达打下了比较扎实的基础。",
      ],
      medium: [
        "你们基本上把图片内容说出来了，但细节还可以更具体一些，人物状态、空间位置或环境氛围这些方面还没有充分展开。",
        "这组能让听众知道图片在呈现什么，但画面重点还不够突出，最关键的视觉信息需要再强调一下。",
        `描述有一定基础，但目前主要停留在"图里有什么"这个层面，下一步需要说明这些元素之间有什么关系。`,
        `描述内容比较完整，但组织顺序稍显散乱，下次可以按"整体—主体—细节—感受"这个逻辑来推进。`,
        "主要内容你们都看到了，但细节的选取可以更有针对性，应该优先说那些能够支撑主题的细节。",
      ],
      weak: [
        "目前图片描述比较空泛，听众不清楚画面里最重要的是什么，需要先把主体和场景交代清楚。",
        "这组对图片的观察还不够充分，很多地方直接跳到观点了，但图像本身提供的依据还没有说出来。",
        "描述缺少具体细节，人物动作、环境特点、空间关系都没有展开，画面感因此比较弱。",
        "表达上有些跳跃，图像本身还没有说清楚，就进入了后面的解释和升华，顺序上需要调整。",
        "图片描述这个环节需要重点加强，建议先回答三个基本问题：图中最突出的是谁或者什么？它在哪里？它呈现出什么状态？",
      ],
    },
  },
  {
    id: "relation",
    title: "关系链接",
    scope: "single",
    note: "画面信息之间的联系",
    remarks: {
      good: [
        "你们能够把两张图联系起来看，没有把它们当成两个独立画面分开处理，整体表达的连贯性是比较强的。",
        "这组对两图关系的判断是清晰的，能够准确看出它们之间存在对比、递进、因果还是呼应关系，这个判断很重要。",
        "连接句用得比较自然，听众能清楚理解第一张图和第二张图为什么要放在一起表达，说得通。",
        "第二位同学能够接住前一位的内容继续往前推进，两人之间的接力感比较明显，配合做得好。",
        "你们不只是说了两图之间有联系，还能进一步说明这种联系共同指向什么问题，这个完成度是比较高的。",
      ],
      medium: [
        "两张图你们都讲到了，也有一定的连接意识，但两图之间的关系还可以说得更明确一些。",
        "这组能看出想把两张图放在一起理解，但目前关系判断还比较模糊，到底是对比、递进还是因果，需要明确说出来。",
        "两位同学之间有衔接，但承接可以更自然，后一位同学可以先回应前一位的关键词，再展开自己的内容，过渡会更顺。",
        "你们提到两图有相似之处，但还需要进一步说明：这种相似共同反映了什么，这一步还差着。",
        `两图关系已经有雏形了，但表达上还缺一句明确的连接句，可以试试"如果说第一张图……那么第二张图……"这个句式。`,
      ],
      weak: [
        "目前两张图之间的联系没有建立起来，听起来更像是分别介绍了两张图，缺少整体意识。",
        "这组最主要的问题就是关系链接没有做到，听众能听懂每张图，但不清楚它们为什么被放在一起，这是核心问题。",
        "两位同学的发言衔接比较弱，后一位同学像是重新开始，没有接住前一位的内容，缺少协作推进的意识。",
        "你们没有明确说出两图之间是对比、递进、因果、并列还是转折关系，导致整体表达比较松散。",
        `关系链接这个环节需要重点加强，下次先判断两图是什么关系，再用一句话说清楚："第一张图呈现……，第二张图进一步说明……"。`,
      ],
    },
  },
  {
    id: "logic",
    title: "逻辑推进",
    scope: "single",
    note: "表达顺序与层次推进",
    remarks: {
      good: [
        "你们的表达有比较清晰的推进脉络，从图片描述进入两图关系，再过渡到主题，每一步都走得比较稳。",
        "四次发言的功能分工比较明确，每一位同学都在前一位的基础上继续推进，没有出现明显的重复和空转。",
        "这组逻辑比较扎实，观点能够落回图片细节上，说明你们的结论是有画面依据的，不是凭空推断。",
        `你们完成了从"看到了什么"到"这些细节说明什么"的推进，表达层次是比较完整的。`,
        "整体结构很清楚，前有描述，中有联系，后有解释和收尾，听众能跟上你们的表达思路。",
      ],
      medium: [
        "表达基本完整，但从图片描述到主题之间的过渡还可以更顺一些，中间的推进还差几步。",
        "里面有一些很好的观察和判断，但前后之间的推进关系还不够清晰，加几句过渡语会有帮助。",
        "有逻辑意识，但第二轮发言存在一些重复描述，这个时候应该减少画面复述，重心放在解释图像的含义上。",
        "从描述到主题的基本过程能够完成，但中间对两图意义的解释这一步还不够充分，说得比较浅。",
        "整体逻辑没有明显断裂，但还可以更紧凑，每一句话都应该服务于关系判断或主题表达，不要有游离的内容。",
      ],
      weak: [
        "目前表达的逻辑跳跃比较明显，图片描述、关系说明和主题提炼之间的衔接不清楚，听众很难跟上。",
        "这组有一些观点，但从图片到观点之间缺少解释过程，听众不容易理解你们为什么会得出这个结论。",
        "后半段出现了比较多的重复描述，表达没有向主题方向推进，停在原地了。",
        `前面说图片，后面直接升华，中间"这些细节说明了什么"的分析过程是缺失的，这是整体逻辑最薄弱的地方。`,
        `逻辑推进需要加强，建议按"描述图片—连接两图—解释意义—提炼主题"四个步骤来组织，每一步承担一个明确的任务。`,
      ],
    },
  },
  {
    id: "theme",
    title: "主题提炼",
    scope: "single",
    note: "从信息到中心观点",
    remarks: {
      good: [
        "你们的主题表达是明确的，能用一句话概括出两张图片共同指向的核心意思，结尾落得很稳。",
        "这组主题提炼比较具体，能落到某一种现象、情绪或社会问题上，没有停留在空泛的表达层面。",
        "你们的主题是从图片细节里生长出来的，前面的描述和最后的观点之间衔接得很自然，前后是接得上的。",
        "结尾很有力，能把两张图片的内容统一到一个清楚、集中的表达主题里，完成得比较好。",
        "你们不只是给出了主题，还能说明这个主题为什么能从两张图里得出来，这种说明使整体的说服力明显增强。",
      ],
      medium: [
        "有主题意识，能看出想表达一个共同的意思，但主题本身还可以再集中、再具体一些。",
        "主题方向是对的，但表达略显宽泛，建议进一步落到某个具体情境、现象或问题上。",
        "最后有升华，但和前面图片描述之间的过渡还不够自然，接得稍微有点硬，中间需要一步铺垫。",
        "主题能够回应图片内容，但概括力还可以加强，最好用一句更明确、更有指向性的话来收尾。",
        `从图片进入主题这一步你们已经做到了，但主题表达还可以更有辨识度，尽量避免停留在"珍惜""关注""努力"这类大词上。`,
      ],
      weak: [
        "目前主题不够明确，听众不容易判断你们最终想表达的中心意思是什么，结尾没有落地感。",
        "这组有描述，但缺少主题落点，最后没有把两张图统一到一个共同的观点里，整个表达因此显得不完整。",
        "主题表达比较空泛，像是临时加上去的总结，和前面图片细节之间的联系不够紧，说服力比较弱。",
        `结尾还没有形成完整的主题句，需要明确说出来："这两张图共同表达的是……"，把这句话补上。`,
        "主题提炼这个环节需要重点加强，下次可以先问自己：这两张图共同提醒我们关注什么问题？然后用一句话把答案清楚地说出来。",
      ],
    },
  },
];

const moduleMap = Object.fromEntries(modules.map((item) => [item.id, item]));
const ratingMap = Object.fromEntries(ratings.map((item) => [item.id, item]));
const storageKey = "exam-review-template-state-v2";

let state = loadState();
let route = { name: "home" };
let activeRating = "good";
let toastTimer = null;

function createDefaultState() {
  return {
    selections: {
      picture: {
        a: null,
        b: null,
      },
      relation: null,
      logic: null,
      theme: null,
    },
  };
}

function loadState() {
  try {
    const cached = JSON.parse(localStorage.getItem(storageKey));
    if (cached && cached.selections) {
      return {
        selections: {
          ...createDefaultState().selections,
          ...cached.selections,
          picture: {
            ...createDefaultState().selections.picture,
            ...(cached.selections.picture || {}),
          },
        },
      };
    }
  } catch (error) {
    localStorage.removeItem(storageKey);
  }

  return createDefaultState();
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function getRequiredSelections() {
  return [
    state.selections.picture.a,
    state.selections.picture.b,
    state.selections.relation,
    state.selections.logic,
    state.selections.theme,
  ];
}

function getProgress() {
  const completed = getRequiredSelections().filter(Boolean).length;
  return {
    completed,
    total: 5,
    ready: completed === 5,
  };
}

function getModuleStatus(moduleItem) {
  if (moduleItem.id === "picture") {
    const aDone = Boolean(state.selections.picture.a);
    const bDone = Boolean(state.selections.picture.b);
    if (aDone && bDone) return { label: "A、B 已选择", kind: "done" };
    if (aDone || bDone) return { label: `${aDone ? "A 已选" : "A 未选"} · ${bDone ? "B 已选" : "B 未选"}`, kind: "partial" };
    return { label: "A、B 待选择", kind: "empty" };
  }

  const selected = state.selections[moduleItem.id];
  if (!selected) return { label: "待选择", kind: "empty" };

  return {
    label: `${ratingMap[selected.rating].label} · ${selected.text}`,
    kind: "done",
  };
}

function getCurrentSelection(moduleId, studentId) {
  if (moduleId === "picture") {
    return state.selections.picture[studentId];
  }

  return state.selections[moduleId];
}

function setCurrentSelection(moduleId, studentId, rating, text) {
  const nextSelection = { rating, text };
  if (moduleId === "picture") {
    state.selections.picture[studentId] = nextSelection;
  } else {
    state.selections[moduleId] = nextSelection;
  }

  saveState();
  render();
}

function navigate(nextRoute) {
  route = nextRoute;
  if (nextRoute.name === "select") {
    activeRating = getCurrentSelection(nextRoute.moduleId, nextRoute.studentId)?.rating || "good";
  }
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function render() {
  const app = document.querySelector("#app");

  if (route.name === "home") {
    app.innerHTML = renderHome();
  }

  if (route.name === "students") {
    app.innerHTML = renderStudents();
  }

  if (route.name === "select") {
    app.innerHTML = renderSelect();
  }

  if (route.name === "result") {
    app.innerHTML = renderResult();
  }

  bindEvents();
}

function renderHome() {
  const progress = getProgress();
  const moduleCards = modules
    .map((moduleItem) => {
      const status = getModuleStatus(moduleItem);
      return `
        <button class="module-card" data-route="${moduleItem.id === "picture" ? "students" : "select"}" data-module="${moduleItem.id}">
          <span class="card-main">
            <h3>${moduleItem.title}</h3>
            <span class="card-meta">${moduleItem.note}</span>
          </span>
          <span class="card-footer">
            <span class="status-dot ${status.kind === "done" ? "done" : status.kind === "partial" ? "partial" : ""}"></span>
            <span class="status-text">${escapeHtml(status.label)}</span>
            <span class="arrow" aria-hidden="true">›</span>
          </span>
        </button>
      `;
    })
    .join("");

  return `
    <section>
      <div class="topbar">
        <div class="title-block">
          <p class="eyebrow">考试点评</p>
          <h1>四模块点评模板</h1>
        </div>
        <span class="progress-pill">${progress.completed}/${progress.total} 已完成</span>
      </div>

      <div class="toolbar">
        <button class="btn primary" data-action="show-result">生成综合评语</button>
        <button class="btn" data-action="reset">清空选择</button>
      </div>

      <div class="grid">${moduleCards}</div>
    </section>
    <div class="toast" role="status" aria-live="polite"></div>
  `;
}

function renderStudents() {
  const a = state.selections.picture.a;
  const b = state.selections.picture.b;

  return `
    <section>
      <div class="view-header">
        <button class="btn" data-route="home">返回</button>
        <div class="header-copy">
          <p class="eyebrow">图片描述</p>
          <h2>A、B 同学</h2>
        </div>
      </div>

      <div class="student-grid">
        ${renderStudentCard("a", "A 同学", a)}
        ${renderStudentCard("b", "B 同学", b)}
      </div>
    </section>
    <div class="toast" role="status" aria-live="polite"></div>
  `;
}

function renderStudentCard(studentId, label, selected) {
  const status = selected ? `${ratingMap[selected.rating].label} · ${selected.text}` : "待选择";
  return `
    <button class="choice-card" data-route="select" data-module="picture" data-student="${studentId}">
      <span class="card-main">
        <h3>${label}</h3>
        <span class="card-meta">${escapeHtml(status)}</span>
      </span>
      <span class="card-footer">
        <span class="status-dot ${selected ? "done" : ""}"></span>
        <span class="status-text">${selected ? "已选择" : "未选择"}</span>
        <span class="arrow" aria-hidden="true">›</span>
      </span>
    </button>
  `;
}

function renderSelect() {
  const moduleItem = moduleMap[route.moduleId];
  const selected = getCurrentSelection(route.moduleId, route.studentId);
  const title = route.moduleId === "picture" ? `${route.studentId === "a" ? "A" : "B"} 同学` : moduleItem.title;
  const backRoute = route.moduleId === "picture" ? "students" : "home";
  const remarks = moduleItem.remarks[activeRating];

  return `
    <section>
      <div class="view-header">
        <button class="btn" data-route="${backRoute}">返回</button>
        <div class="header-copy">
          <p class="eyebrow">${moduleItem.title}</p>
          <h2>${title}</h2>
        </div>
      </div>

      <div class="segmented" role="tablist" aria-label="${moduleItem.title}等级">
        ${ratings
          .map(
            (rating) => `
              <button class="${activeRating === rating.id ? `active ${rating.className}` : ""}" data-action="rating" data-rating="${rating.id}">
                ${rating.label}
              </button>
            `,
          )
          .join("")}
      </div>

      <div class="remark-list">
        ${remarks
          .map((text, index) => {
            const isSelected = selected?.rating === activeRating && selected?.text === text;
            return `
              <button class="remark-card ${isSelected ? "selected" : ""}" data-action="choose" data-rating="${activeRating}" data-text="${escapeHtml(text)}">
                <span class="remark-index">${index + 1}</span>
                <span class="remark-text">${text}</span>
              </button>
            `;
          })
          .join("")}
      </div>

      <div class="selection-footer">
        <button class="btn primary" data-route="${backRoute}" ${selected ? "" : "disabled"}>确定并返回</button>
      </div>
    </section>
    <div class="toast" role="status" aria-live="polite"></div>
  `;
}

function renderResult() {
  const result = generateReview();

  return `
    <section>
      <div class="view-header">
        <button class="btn" data-route="home">返回</button>
        <div class="header-copy">
          <p class="eyebrow">综合评语</p>
          <h2>已生成</h2>
        </div>
      </div>

      <div class="result-panel">
        <textarea class="result-text" id="resultText">${escapeHtml(result)}</textarea>
        <div class="result-actions">
          <button class="btn" data-action="copy">复制评语</button>
          <button class="btn" data-route="home">继续修改</button>
          <button class="btn" data-action="reset">清空选择</button>
        </div>
      </div>
    </section>
    <div class="toast" role="status" aria-live="polite"></div>
  `;
}

function generateReview() {
  const selections = state.selections;
  const lines = ["综合评语："];

  if (selections.picture.a) {
    lines.push(`图片描述方面，A 同学部分：${selections.picture.a.text}`);
  }

  if (selections.picture.b) {
    lines.push(`图片描述方面，B 同学部分：${selections.picture.b.text}`);
  }

  if (selections.relation) {
    lines.push(`关系链接方面，${selections.relation.text}`);
  }

  if (selections.logic) {
    lines.push(`逻辑推进方面，${selections.logic.text}`);
  }

  if (selections.theme) {
    lines.push(`主题提炼方面，${selections.theme.text}`);
  }

  if (lines.length === 1) {
    lines.push("暂未选择任何点评话术。可以先选择一个模块，再生成当前评语。");
  } else {
    lines.push("总体来看，本次点评可继续围绕画面细节、信息联系、表达层次和中心提炼进行跟进，让学生在观察准确性和表达完整性上同步提升。");
  }

  return lines.join("\n");
}

function bindEvents() {
  document.querySelectorAll("[data-route]").forEach((element) => {
    element.addEventListener("click", () => {
      const next = element.dataset.route;

      if (next === "home") {
        navigate({ name: "home" });
      }

      if (next === "students") {
        navigate({ name: "students" });
      }

      if (next === "select") {
        navigate({
          name: "select",
          moduleId: element.dataset.module,
          studentId: element.dataset.student,
        });
      }
    });
  });

  document.querySelectorAll("[data-action='rating']").forEach((element) => {
    element.addEventListener("click", () => {
      activeRating = element.dataset.rating;
      render();
    });
  });

  document.querySelectorAll("[data-action='choose']").forEach((element) => {
    element.addEventListener("click", () => {
      setCurrentSelection(route.moduleId, route.studentId, element.dataset.rating, element.dataset.text);
      showToast("已选择");
    });
  });

  document.querySelectorAll("[data-action='show-result']").forEach((element) => {
    element.addEventListener("click", () => {
      navigate({ name: "result" });
    });
  });

  document.querySelectorAll("[data-action='copy']").forEach((element) => {
    element.addEventListener("click", async () => {
      const resultText = document.querySelector("#resultText").value;
      try {
        await navigator.clipboard.writeText(resultText);
        showToast("已复制");
      } catch (error) {
        document.querySelector("#resultText").select();
        showToast("已选中文本");
      }
    });
  });

  document.querySelectorAll("[data-action='reset']").forEach((element) => {
    element.addEventListener("click", () => {
      state = createDefaultState();
      saveState();
      navigate({ name: "home" });
      showToast("已清空");
    });
  });
}

function showToast(message) {
  const toast = document.querySelector(".toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 1400);
}

render();
