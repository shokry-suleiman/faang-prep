# LeetCode Problem List — Aligned to ZTM FAANG Course Modules

**Course:** Master the Coding Interview: Big Tech (FAANG) Interviews — Andrei Neagoie & Yihua Zhang
**Language:** Solve ALL problems in **Python**
**Total:** ~126 problems across 14 modules

---

## 📊 Overall Progress

**Problems Solved: 74 / 133 — 55.6%**

```
[████████████████████████████░░░░░░░░░░░░░░░░░░░░] 55.6%
```

> Every time you solve a new problem, add ✅ next to it and update the count above.
> Formula: solved ÷ 133 × 100 = %. Each █ block = 2%.

### Progress by Module

| Module | Solved | Total | Progress |
|--------|--------|-------|----------|
| 1 — Arrays | 7 | 9 | 78% ████████░░ |
| 2 — Strings | 6 | 8 | 75% ███████░░░ |
| 3 — Linked Lists | 5 | 11 | 45% ████░░░░░░ |
| 4 — Stacks & Queues | 7 | 10 | 70% ███████░░░ |
| 5 — Binary Trees & BST | 13 | 19 | 68% ██████░░░░ |
| 6 — 2D Arrays | 7 | 9 | 78% ████████░░ |
| 7 — Graphs | 12 | 18 | 67% ██████░░░░ |
| 8 — Backtracking | 2 | 11 | 18% ██░░░░░░░░░ |
| 9 — Dynamic Programming | 11 | 23 | 48% █████░░░░░ |
| 10 — Tries | 3 | 3 | 100% ██████████ ✅ |
| 11 — Heaps | 4 | 10 | 40% ████░░░░░░ |
| 12 — Sorting & Greedy | 1 | 10 | 10% █░░░░░░░░░ |
| 13 — Binary Search | 2 | 6 | 33% ███░░░░░░░ |
| 14 — Interface Design | 0 | 4 | 0% ░░░░░░░░░░ |

---

---

## Phase 0 — Speed Training: Solve Any Medium in 25-30 Minutes

> **Goal:** Before starting the main modules, build the speed and pattern recognition to consistently solve Medium problems in 25-30 minutes.  
> **Current:** ~43 Mediums solved, likely averaging 45-60+ min per Medium.  
> **Target:** Consistent 25-30 min on any unseen Medium before moving to the main prep.

### The 5-Step Method (Per Problem)

```
Step 1: READ & CLARIFY         (2-3 min)   — Inputs, outputs, constraints, edge cases
Step 2: IDENTIFY THE PATTERN   (3-5 min)   — Which pattern? (see pattern list below)
Step 3: PLAN / PSEUDOCODE      (3-5 min)   — Write approach in comments BEFORE coding
Step 4: CODE                   (10-15 min)  — Clean, no debugging while writing
Step 5: TEST & EDGE CASES      (3-5 min)   — Dry-run with example, test edge cases
                               ─────────
                         TOTAL: 25-30 min
```

### The 15 Patterns You Must Recognize Instantly

Master these patterns — every Medium maps to one or more of them:

| # | Pattern | When You See | Key Problems to Drill |
|---|---------|-------------|----------------------|
| 1 | **Two Pointers** | Sorted array, pair/triplet search, palindrome | #11, #15, #125 |
| 2 | **Sliding Window** | Subarray/substring with condition, fixed or variable size | #3, #438, #76 |
| 3 | **HashMap / HashSet** | Frequency count, duplicates, complement lookup | #1, #49, #128 |
| 4 | **Stack** | Matching brackets, next greater element, nested structures | #20, #739, #394 |
| 5 | **Binary Search** | Sorted data, search space reduction, min/max optimization | #33, #153, #875 |
| 6 | **BFS (Queue)** | Shortest path, level-order, layer-by-layer processing | #102, #994, #200 |
| 7 | **DFS (Recursion)** | Tree traversal, explore all paths, backtracking | #104, #226, #236 |
| 8 | **Backtracking** | Combinations, permutations, constraint satisfaction | #78, #46, #39 |
| 9 | **Dynamic Programming** | Optimal substructure, overlapping subproblems, "min/max/count ways" | #70, #198, #322 |
| 10 | **Greedy** | Local optimal → global optimal, intervals, scheduling | #55, #56, #435 |
| 11 | **Monotonic Stack** | Next greater/smaller element, histogram problems | #739, #84 |
| 12 | **Linked List** | Pointer manipulation, fast/slow, reversal | #206, #141, #19 |
| 13 | **Trie** | Prefix search, autocomplete, word dictionary | #208, #211 |
| 14 | **Heap / Priority Queue** | Top-K, merge sorted, streaming median | #215, #295, #973 |
| 15 | **Union-Find** | Connected components, cycle detection in undirected graph | #323, #684 |

### Pattern Recognition Cheat Sheet

```
"Subarray / Substring with condition"      → Sliding Window
"Find pair / triplet in sorted array"       → Two Pointers
"Shortest path / minimum steps"             → BFS
"All combinations / permutations"           → Backtracking
"Min cost / max profit / count ways"        → DP
"Next greater / smaller element"            → Monotonic Stack
"Top-K / Kth largest"                       → Heap
"Prefix matching / autocomplete"            → Trie
"Connected components / group items"        → Union-Find or BFS/DFS
"Interval overlap / merge / schedule"       → Sort + Greedy
"Search in sorted / answer in range"        → Binary Search
"Tree level-by-level"                       → BFS (Queue)
"Tree path / subtree property"              → DFS (Recursion)
"Matching / nesting / undo last"            → Stack
"Frequency / lookup / seen before"          → HashMap
```

### 4-Week Speed Training Schedule

#### Week 1 — Pattern Drilling (Easy-Medium, learn to recognize fast)

**Goal:** Solve 3 problems/day. For each: identify pattern BEFORE coding. Time yourself.

| Day | Pattern Focus | Problems to Solve | Target Time |
|-----|--------------|-------------------|-------------|
| 1 | Two Pointers | #167 Two Sum II, #11 Container With Most Water | 20 min each |
| 2 | Sliding Window | #3 Longest Substring, #438 Find All Anagrams | 25 min each |
| 3 | HashMap | #49 Group Anagrams, #128 Longest Consecutive | 25 min each |
| 4 | Stack | #155 Min Stack, #150 Eval Reverse Polish | 25 min each |
| 5 | Binary Search | #33 Rotated Array, #153 Find Min Rotated | 25 min each |
| 6 | BFS | #102 Level Order, #994 Rotting Oranges | 25 min each |
| 7 | **Review** — Re-solve the 2 hardest from this week without looking | 25 min each |

#### Week 2 — More Patterns + Speed Pressure

| Day | Pattern Focus | Problems to Solve | Target Time |
|-----|--------------|-------------------|-------------|
| 1 | DFS / Trees | #226 Invert Tree, #98 Validate BST | 25 min each |
| 2 | Backtracking | #78 Subsets, #46 Permutations | 25 min each |
| 3 | DP (1D) | #70 Climbing Stairs, #198 House Robber | 25 min each |
| 4 | Greedy | #55 Jump Game, #56 Merge Intervals | 25 min each |
| 5 | Linked List | #206 Reverse LL, #19 Remove Nth Node | 25 min each |
| 6 | Heap | #215 Kth Largest, #973 K Closest Points | 25 min each |
| 7 | **Review** — Re-solve the 2 hardest from this week without looking | 25 min each |

#### Week 3 — Mixed Practice (No Pattern Hint, Simulate Interview)

**Goal:** Pick problems randomly. No peeking at tags. Identify pattern yourself in <5 min.

| Day | Problems (DO NOT look at tags first) | Target Time |
|-----|--------------------------------------|-------------|
| 1 | #238 Product of Array Except Self, #5 Longest Palindromic Substr | 25-30 min each |
| 2 | #230 Kth Smallest in BST, #133 Clone Graph | 25-30 min each |
| 3 | #322 Coin Change, #139 Word Break | 30 min each |
| 4 | #207 Course Schedule, #200 Number of Islands | 25-30 min each |
| 5 | #236 LCA of Binary Tree, #300 LIS | 30 min each |
| 6 | #394 Decode String, #146 LRU Cache | 30 min each |
| 7 | **Review** — Re-solve your 3 slowest problems this week | 25 min each |

#### Week 4 — Speed Test & Confidence Building

**Goal:** Solve unseen Mediums in ≤30 min. If you can do 4/5 in time, you're ready.

| Day | Task | Target |
|-----|------|--------|
| 1 | Solve 2 random Mediums from NeetCode 150 (unseen) | 30 min each |
| 2 | Solve 2 random Mediums from NeetCode 150 (unseen) | 30 min each |
| 3 | Solve 2 random Mediums from NeetCode 150 (unseen) | 28 min each |
| 4 | Solve 2 random Mediums from NeetCode 150 (unseen) | 28 min each |
| 5 | **Mock interview** — 2 Mediums, 45 min total (like real interview) | 22 min each |
| 6 | **Mock interview** — 1 Medium + 1 Hard, 60 min total | Med: 25, Hard: 35 |
| 7 | **Rest + Review** — Review all patterns, re-solve weak ones | — |

### Speed Benchmarks — Know Where You Stand

```
TIME PER MEDIUM    LEVEL              ACTION
─────────────────────────────────────────────────────
> 60 min           Beginner            Focus on learning patterns, not speed
45-60 min          Intermediate        You're here now — drill patterns
35-45 min          Getting there       Mixed practice, reduce think time
25-35 min          Interview ready     ✅ Start main prep plan
< 25 min           Strong              Move to Hards
```

### Rules During Speed Training

1. **Timer is mandatory** — Use a visible countdown timer for every problem
2. **If stuck > 10 min** — Stop, read the solution, understand the pattern, re-solve from scratch next day
3. **No debugging loops** — If your code doesn't work, re-read logic first, don't randomly change things
4. **Write pattern name as first comment** before coding: `// Pattern: Sliding Window`
5. **Track your times** — Log every solve time. You should see improvement week over week
6. **Re-solve > New problems** — Re-solving a problem you struggled with builds speed more than doing new ones

### Time Tracking Log

| Date | Problem | Pattern | Time | Solved? | Notes |
|------|---------|---------|------|---------|-------|
| | | | | | |
| | | | | | |
| | | | | | |

### Resources for Speed Training

| Resource | What | Link |
|----------|------|------|
| NeetCode 150 | Curated list organized by pattern | https://neetcode.io/roadmap |
| NeetCode YouTube | Pattern-based video explanations | https://www.youtube.com/@NeetCode |
| LeetCode Timer | Built-in timer in LeetCode editor | Enable in LeetCode settings |
| Blind 75 | Condensed must-do list | https://leetcode.com/discuss/general-discussion/460599/ |
| AlgoMonster | Pattern-based learning | https://algo.monster/ |
| Tech Interview Handbook | Patterns + time allocation guide | https://www.techinterviewhandbook.org/ |

---

### Phase 0 Completion Criteria

You're ready to move to Module 1 when:
- [ ] Can identify the correct pattern in < 3 minutes for any Medium
- [ ] Solving 4 out of 5 unseen Mediums in ≤ 30 minutes
- [ ] Comfortable with all 15 patterns (no blank stares)
- [ ] Completed at least 2 mock interview sessions (Week 4)

---

## Module 1 — Arrays (Course Sections 2–4)

### Re-solve in Python (done in JS):

| #   | Problem                        | Difficulty | Pattern          | Python Focus                    |
| --- | ------------------------------ | ---------- | ---------------- | ------------------------------- |
| 1   | Two Sum ✅                      | Easy       | HashMap          | `dict`, `enumerate`             |
| 11  | Container With Most Water ✅    | Medium     | Two Pointers     | `max()`, two pointers           |
| 42  | Trapping Rain Water            | Hard       | Two Pointers     | Already in course               |

### Practice alongside:

| #   | Problem                        | Difficulty | Pattern          | Why                             |
| --- | ------------------------------ | ---------- | ---------------- | ------------------------------- |
| 49  | Group Anagrams ✅               | Medium     | HashMap          | `defaultdict`, `sorted()`       |
| 128 | Longest Consecutive Sequence ✅ | Medium     | HashMap          | `set()` operations              |
| 238 | Product of Array Except Self ✅ | Medium     | Prefix/Suffix    | Prefix/suffix pattern           |
| 347 | Top K Frequent Elements        | Medium     | Heap             | `Counter`, `heapq.nlargest`     |
| 15  | 3Sum ✅                         | Medium     | Two Pointers     | Sorting + two pointers          |
| 217 | Contains Duplicate ✅           | Easy       | HashMap          | Warm-up in Python               |

---

## Module 2 — Strings (Course Sections 5–7)

### Re-solve in Python:

| #   | Problem                                    | Difficulty | Pattern          | Python Focus                  |
| --- | ------------------------------------------ | ---------- | ---------------- | ----------------------------- |
| 3   | Longest Substring Without Repeating ✅      | Medium     | Sliding Window   | `set` + sliding window intro  |
| 125 | Valid Palindrome ✅                         | Easy       | Two Pointers     | `isalnum()`, slicing `[::-1]` |

### Practice alongside:

| #   | Problem                        | Difficulty | Pattern          | Why                             |
| --- | ------------------------------ | ---------- | ---------------- | ------------------------------- |
| 242 | Valid Anagram ✅                | Easy       | HashMap          | `Counter` comparison            |
| 5   | Longest Palindromic Substring ✅| Medium     | Two Pointers     | Expand from center              |
| 647 | Palindromic Substrings ✅       | Medium     | Two Pointers     | Count palindromes (expand)      |
| 20  | Valid Parentheses ✅            | Easy       | Stack            | Stack intro (upcoming module)   |
| 438 | Find All Anagrams in a String  | Medium     | Sliding Window   | Fixed window + hashmap          |
| 76  | Minimum Window Substring       | Hard       | Sliding Window   | Sliding window master problem   |

---

## Module 3 — Linked Lists (Course Sections 8–12)

### Re-solve in Python:

| #   | Problem                        | Difficulty | Pattern          | Python Focus                    |
| --- | ------------------------------ | ---------- | ---------------- | ------------------------------- |
| 206 | Reverse Linked List ✅          | Easy       | Pull-to-front    | Python node manipulation        |
| 141 | Linked List Cycle ✅            | Easy       | Two Pointers     | Floyd's — in course             |

### Practice alongside:

| #   | Problem                            | Difficulty | Pattern          | Why                             |
| --- | ---------------------------------- | ---------- | ---------------- | ------------------------------- |
| 92  | Reverse Linked List II ✅           | Medium     | Pull-to-front    | M-N reversal (course Q#7)       |
| 21  | Merge Two Sorted Lists ✅           | Easy       | Two Pointers     | Fundamental                     |
| 143 | Reorder List                       | Medium     | Two Pointers     | Combines reverse + merge        |
| 142 | Linked List Cycle II               | Medium     | Two Pointers     | Floyd's cycle — find start      |
| 19  | Remove Nth Node From End           | Medium     | Two Pointers     | Two-pointer on LL               |
| 138 | Copy List with Random Pointer ✅    | Medium     | HashMap          | Deep copy with hashmap          |
| 24  | Swap Nodes in Pairs                | Medium     | Pull-to-front    | Pull-to-front (k=2)            |
| 25  | Reverse Nodes in k-Group           | Hard       | Pull-to-front    | Pull-to-front per group         |
| 23  | Merge K Sorted Lists               | Hard       | Heap             | Heap + LL — stretch             |

---

## Module 4 — Stacks & Queues (Course Sections ~13–15)

| #    | Problem                                    | Difficulty | Pattern          | Key Concept                     |
| ---- | ------------------------------------------ | ---------- | ---------------- | ------------------------------- |
| 20   | Valid Parentheses ✅                        | Easy       | Stack            | Basic stack                     |
| 155  | Min Stack ✅                                | Medium     | Stack            | Stack design                    |
| 150  | Evaluate Reverse Polish Notation ✅        | Medium     | Stack            | Stack evaluation                |
| 739  | Daily Temperatures ✅                      | Medium     | Monotonic Stack  | Monotonic stack                 |
| 394  | Decode String                              | Medium     | Stack            | Nested stack                    |
| 853  | Car Fleet                                  | Medium     | Stack            | Stack + sorting                 |
| 232  | Implement Queue using Stacks ✅             | Easy       | Stack            | Redo in Python                  |
| 1249 | Minimum Remove to Make Valid Parentheses ✅ | Medium     | Stack            | Redo in Python                  |
| 496  | Next Greater Element I ✅                  | Easy       | Monotonic Stack  | Monotonic stack warm-up         |
| 84   | Largest Rectangle in Histogram             | Hard       | Monotonic Stack  | Monotonic stack — important     |

---

## Module 5 — Binary Trees & BST (Course Sections ~16–21)

### Re-solve in Python:

| #    | Problem                             | Difficulty | Pattern          | Python Focus                    |
| ---- | ----------------------------------- | ---------- | ---------------- | ------------------------------- |
| 102  | Binary Tree Level Order Traversal ✅ | Medium     | BFS              | `collections.deque`             |
| 226  | Invert Binary Tree ✅                | Easy       | DFS              | Clean recursion                 |
| 104  | Maximum Depth of Binary Tree ✅      | Easy       | DFS              | Base case pattern               |
| 1448 | Count Good Nodes in Binary Tree ✅   | Medium     | DFS              | Recently solved — redo          |
| 222  | Count Complete Tree Nodes ✅         | Medium     | Binary Search    | Recently solved — redo          |
| 199  | Binary Tree Right Side View ✅       | Medium     | BFS              | Recently solved — redo          |

### Practice alongside:

| #   | Problem                                 | Difficulty | Pattern          | Why                             |
| --- | --------------------------------------- | ---------- | ---------------- | ------------------------------- |
| 230 | Kth Smallest Element in BST             | Medium     | DFS              | BST in-order traversal          |
| 98  | Validate Binary Search Tree ✅           | Medium     | DFS              | BST property check              |
| 105 | Construct BT from Preorder and Inorder  | Medium     | DFS              | Tree construction               |
| 236 | Lowest Common Ancestor of BT            | Medium     | DFS              | Classic recursion               |
| 235 | LCA of a BST                            | Medium     | DFS              | BST shortcut                    |
| 110  | Balanced Binary Tree ✅                 | Easy       | DFS              | Height-based balance check      |
| 100  | Same Tree ✅                            | Easy       | DFS              | Structural equality recursion   |
| 1791 | Find Center of Star Graph ✅            | Easy       | Graph            | Degree check — simple           |
| 509  | Fibonacci Number ✅                     | Easy       | DP               | DP warm-up                      |
| 557  | Reverse Words in a String III ✅        | Easy       | String           | String manipulation             |
| 114 | Flatten Binary Tree to Linked List ✅   | Medium     | DFS              | Pre-order + pointer rewire      |
| 124 | Binary Tree Maximum Path Sum            | Hard       | DFS              | Hard tree problem — stretch     |
| 297 | Serialize and Deserialize Binary Tree   | Hard       | BFS/DFS          | Design + tree — stretch         |

---

## Module 6 — 2D Arrays / Matrices (Course Sections ~22–24)

| #   | Problem                        | Difficulty | Pattern          | Key Concept                     |
| --- | ------------------------------ | ---------- | ---------------- | ------------------------------- |
| 73  | Set Matrix Zeroes ✅            | Medium     | In-place Marker  | In-place matrix                 |
| 54  | Spiral Matrix ✅                | Medium     | Simulation       | Direction traversal             |
| 48  | Rotate Image ✅                | Medium     | Matrix           | Matrix rotation                 |
| 74  | Search a 2D Matrix ✅           | Medium     | Binary Search    | Binary search on matrix         |
| 36  | Valid Sudoku                   | Medium     | HashMap          | Hashset per row/col/box         |
| 79  | Word Search                    | Medium     | Backtracking     | Grid DFS + backtracking         |
| 200 | Number of Islands ✅            | Medium     | BFS/DFS          | Grid BFS/DFS (bridge to graphs) |
| 41  | First Missing Positive         | Hard       | In-place Marker  | Use array indices as markers    |
| 442 | Find All Duplicates in Array ✅ | Medium     | In-place Marker  | Negate values as markers        |

---

## Module 7 — Graphs (Course Sections ~25–28)

| #   | Problem                              | Difficulty | Pattern          | Key Concept                     |
| --- | ------------------------------------ | ---------- | ---------------- | ------------------------------- |
| 733 | Flood Fill ✅                         | Easy       | DFS              | DFS warm-up                     |
| 695 | Max Area of Island ✅                 | Medium     | DFS              | DFS + counting                  |
| 994 | Rotting Oranges ✅                    | Medium     | BFS              | Multi-source BFS (redo Python)  |
| 542 | 01 Matrix ✅                          | Medium     | BFS              | Multi-source BFS                |
| 133 | Clone Graph ✅                        | Medium     | BFS/DFS          | BFS/DFS + hashmap               |
| 207 | Course Schedule ✅                    | Medium     | Topological Sort | Topological sort (in course)    |
| 210 | Course Schedule II ✅                 | Medium     | Topological Sort | Topological sort ordering       |
| 417 | Pacific Atlantic Water Flow          | Medium     | DFS              | Multi-source DFS                |
| 130 | Surrounded Regions                   | Medium     | DFS              | Border-connected DFS            |
| 797 | All Paths From Source to Target      | Medium     | DFS              | DFS + path tracking             |
| 1376| Time Needed to Inform All Employees ✅| Medium     | DFS              | DFS + adjacency list            |
| 323 | Number of Connected Components       | Medium     | Union-Find       | Union-Find                      |
| 947 | Most Stones Removed with Same Row or Column ✅ | Medium | Union-Find | Union-Find on coordinates |
| 684 | Redundant Connection                 | Medium     | Union-Find       | Union-Find                      |
| 743 | Network Delay Time ✅                | Medium     | Dijkstra         | Dijkstra's (in course)          |
| 787 | Cheapest Flights Within K Stops ✅   | Medium     | Bellman-Ford     | Bellman-Ford (in course)        |
| 127 | Word Ladder                          | Hard       | BFS              | BFS shortest path — stretch     |

---

## Module 8 — Recursion & Backtracking (Course Sections ~29–31)

| #   | Problem                                | Difficulty | Pattern          | Key Concept                     |
| --- | -------------------------------------- | ---------- | ---------------- | ------------------------------- |
| 78  | Subsets                                | Medium     | Backtracking     | Core backtracking template      |
| 46  | Permutations ✅                        | Medium     | Backtracking     | Core template                   |
| 39  | Combination Sum                        | Medium     | Backtracking     | With duplicates allowed         |
| 40  | Combination Sum II                     | Medium     | Backtracking     | Skip duplicates                 |
| 77  | Combinations                           | Medium     | Backtracking     | nCr generation                  |
| 131 | Palindrome Partitioning                | Medium     | Backtracking     | String backtracking             |
| 17  | Letter Combinations of a Phone Number  | Medium     | Backtracking     | Classic                         |
| 22  | Generate Parentheses                   | Medium     | Backtracking     | Constrained backtracking        |
| 79  | Word Search                            | Medium     | Backtracking     | Grid backtracking (if not done) |
| 37  | Sudoku Solver ✅                        | Hard       | Backtracking     | Constraint backtracking         |
| 51  | N-Queens                               | Hard       | Backtracking     | Stretch goal                    |

---

## Module 9 — Dynamic Programming (Course Sections ~32–35)

### DP Approaches

| Approach | Direction | Code Style | When to Use |
|----------|-----------|-----------|-------------|
| **Top-Down (Memoization)** | Start from big problem → recurse down | Recursion + cache | Easier to think about, good for learning |
| **Bottom-Up (Tabulation)** | Start from base cases → loop up | For loop + dp array | Better performance, no recursion overhead |

> **Both solve the same problem. Use whichever you're comfortable with. Interviewers accept both.**

### 1D DP (do first):

| #   | Problem                        | Difficulty | Pattern          | Key Concept                     |
| --- | ------------------------------ | ---------- | ---------------- | ------------------------------- |
| 70  | Climbing Stairs ✅              | Easy       | DP               | Intro to DP                     |
| 746 | Min Cost Climbing Stairs ✅     | Easy       | DP               | Memoization + correct entry point |
| 198 | House Robber ✅                 | Medium     | DP               | Classic 1D                      |
| 213 | House Robber II                | Medium     | DP               | Circular variation              |
| 300 | Longest Increasing Subsequence ✅ | Medium     | DP               | Binary search optimization      |
| 139 | Word Break ✅                   | Medium     | DP               | String DP                       |
| 322 | Coin Change ✅                  | Medium     | DP               | Unbounded knapsack              |
| 152 | Maximum Product Subarray       | Medium     | DP               | Track min/max                   |
| 91  | Decode Ways                    | Medium     | DP               | String DP                       |
| 416 | Partition Equal Subset Sum     | Medium     | DP               | 0/1 knapsack                    |

### 2D DP (do after):

| #    | Problem                          | Difficulty | Pattern          | Key Concept                     |
| ---- | -------------------------------- | ---------- | ---------------- | ------------------------------- |
| 688  | Knight Probability in Chessboard ✅ | Medium  | DP               | 3D DP — spread probability      |
| 62   | Unique Paths                     | Medium     | DP               | Grid DP intro                   |
| 64   | Minimum Path Sum ✅               | Medium     | DP               | Grid DP                         |
| 1143 | Longest Common Subsequence ✅    | Medium     | DP               | Classic 2D                      |
| 72   | Edit Distance                    | Medium     | DP               | **Critical for NLP/ML**         |
| 518  | Coin Change II                   | Medium     | DP               | 2D knapsack                     |
| 97   | Interleaving String              | Medium     | DP               | Two-string DP                   |
| 516  | Longest Palindromic Subsequence ✅ | Medium   | DP               | 2D DP — palindrome variant      |
| 1092 | Shortest Common Supersequence ✅     | Hard       | DP               | Build on LCS                    |
| 685  | Minimum Domino Rotations ✅          | Medium     | Greedy           | Count frequencies               |
| 312  | Burst Balloons                   | Hard       | DP               | Interval DP — stretch           |

---

## Module 10 — Tries (Course Sections ~36–37)

| #   | Problem                              | Difficulty | Pattern          | Key Concept                     |
| --- | ------------------------------------ | ---------- | ---------------- | ------------------------------- |
| 208 | Implement Trie ✅                    | Medium     | Trie             | Core implementation             |
| 211 | Design Add and Search Words ✅        | Medium     | Trie             | Trie + DFS                      |
| 212 | Word Search II ✅                    | Hard       | Trie             | Trie + backtracking             |

---

## Module 11 — Heaps & Priority Queues (Course Sections ~38–40)

| #    | Problem                            | Difficulty | Pattern          | Key Concept                     |
| ---- | ---------------------------------- | ---------- | ---------------- | ------------------------------- |
| 703  | Kth Largest Element in a Stream ✅  | Easy       | Heap             | `heapq` basics                  |
| 215  | Kth Largest Element in Array ✅     | Medium     | Heap             | Quickselect (in course) — redo  |
| 1046 | Last Stone Weight ✅               | Easy       | Heap             | Max-heap (negate in Python)     |
| 973  | K Closest Points to Origin ✅       | Medium     | Heap             | Min-heap                        |
| 621  | Task Scheduler                     | Medium     | Heap + Greedy    | Max-heap + greedy               |
| 355  | Design Twitter                     | Medium     | Heap             | Heap + OOP                      |
| 451  | Sort Characters By Frequency       | Medium     | Heap             | Heap or bucket sort             |
| 767  | Reorganize String                  | Medium     | Heap + Greedy    | Greedy + heap                   |
| 295  | Find Median from Data Stream       | Hard       | Heap             | Two heaps — important           |
| 1642 | Furthest Building You Can Reach    | Medium     | Heap + Greedy    | Heap + greedy                   |

---

## Module 12 — Sorting, Greedy & Intervals (Course Sections ~41–44)

| #   | Problem                        | Difficulty | Pattern          | Key Concept                     |
| --- | ------------------------------ | ---------- | ---------------- | ------------------------------- |
| 56  | Merge Intervals ✅              | Medium     | Greedy           | Sort + merge                    |
| 57  | Insert Interval                | Medium     | Greedy           | Classic                         |
| 435 | Non-overlapping Intervals      | Medium     | Greedy           | Greedy removal                  |
| 252 | Meeting Rooms                  | Easy       | Greedy           | Overlap check                   |
| 253 | Meeting Rooms II               | Medium     | Heap + Greedy    | Min-heap sweep                  |
| 763 | Partition Labels               | Medium     | Greedy           | Greedy + last occurrence        |
| 55  | Jump Game                      | Medium     | Greedy           | Greedy                          |
| 45  | Jump Game II                   | Medium     | Greedy           | Greedy BFS                      |
| 134 | Gas Station                    | Medium     | Greedy           | Circular greedy                 |
| 846 | Hand of Straights              | Medium     | Greedy           | Greedy + hashmap                |

---

## Module 13 — Binary Search (Course Sections ~44–45)

| #   | Problem                                      | Difficulty | Pattern          | Key Concept                     |
| --- | -------------------------------------------- | ---------- | ---------------- | ------------------------------- |
| 704 | Binary Search ✅                              | Easy       | Binary Search    | Warm-up                         |
| 33  | Search in Rotated Sorted Array               | Medium     | Binary Search    | Modified BS                     |
| 34  | Find First and Last Position ✅               | Medium     | Binary Search    | Redo in Python                  |
| 153 | Find Minimum in Rotated Sorted Array         | Medium     | Binary Search    | Modified BS                     |
| 875 | Koko Eating Bananas                          | Medium     | Binary Search    | BS on answer                    |
| 981 | Time Based Key-Value Store                   | Medium     | Binary Search    | BS + design                     |

---

## Module 14 — Interface Design (Course Section ~46)

| #   | Problem                        | Difficulty | Pattern          | Key Concept                     |
| --- | ------------------------------ | ---------- | ---------------- | ------------------------------- |
| 146 | LRU Cache                     | Medium     | HashMap + LL     | `OrderedDict` in Python         |
| 380 | Insert Delete GetRandom O(1)  | Medium     | HashMap          | Hashmap + array                 |
| 355 | Design Twitter                | Medium     | Heap             | Heap + OOP (if not done)        |
| 981 | Time Based Key-Value Store    | Medium     | Binary Search    | BS + design (if not done)       |

---

## Progress Checklist

- [ ] Module 1 — Arrays: 9 problems
- [ ] Module 2 — Strings: 7 problems
- [ ] Module 3 — Linked Lists: 9 problems
- [ ] Module 4 — Stacks & Queues: 9 problems
- [ ] Module 5 — Binary Trees & BST: 13 problems
- [ ] Module 6 — 2D Arrays / Matrices: 7 problems
- [ ] Module 7 — Graphs: 15 problems
- [ ] Module 8 — Recursion & Backtracking: 10 problems
- [ ] Module 9 — Dynamic Programming: 16 problems
- [ ] Module 10 — Tries: 3 problems
- [ ] Module 11 — Heaps & Priority Queues: 10 problems
- [ ] Module 12 — Sorting, Greedy & Intervals: 10 problems
- [ ] Module 13 — Binary Search: 6 problems
- [ ] Module 14 — Interface Design: 4 problems
- **Total: ~120 problems (solve in module order as you progress through the course)**
