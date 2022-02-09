# # Coloring problem

# !!! note
#     This tutorial only covers the coloring problem specific features,
#     It is recommended to read the [Independent set problem](@ref) tutorial too to know more about
#     * how to optimize the tensor network contraction order,
#     * what are the other graph properties computable,
#     * how to select correct method to compute graph properties,
#     * how to compute weighted graphs and handle open vertices.

# ## Problem definition
# A [vertex coloring](https://en.wikipedia.org/wiki/Graph_coloring) is an assignment of labels or colors to each vertex of a graph such that no edge connects two identically colored vertices. 
# In the following, we are going to defined a 3-coloring problem for the Petersen graph.

using GraphTensorNetworks, Graphs

graph = Graphs.smallgraph(:petersen)

# We can visualize this graph using the following function
rot15(a, b, i::Int) = cos(2i*π/5)*a + sin(2i*π/5)*b, cos(2i*π/5)*b - sin(2i*π/5)*a

locations = [[rot15(0.0, 1.0, i) for i=0:4]..., [rot15(0.0, 0.6, i) for i=0:4]...]

show_graph(graph; locs=locations)

# ## Tensor network representation
# Type [`Coloring`](@ref) can be used for constructing the tensor network with optimized contraction order for a coloring problem.
# Let us use 3-colouring problem defined on vertices as an example.
# For a vertex ``v``, we define the degree of freedoms ``c_v\in\{1,2,3\}`` and a vertex tensor labelled by it as
# ```math
# W(v) = \left(\begin{matrix}
#     r_v\\
#     g_v\\
#     b_v
# \end{matrix}\right).
# ```
# For an edge ``(u, v)``, we define an edge tensor as a matrix labelled by ``(c_u, c_v)`` to specify the constraint
# ```math
# B = \left(\begin{matrix}
#     0 & 1 & 1\\
#     1 & 0 & 1\\
#     1 & 1 & 0
# \end{matrix}\right).
# ```
# The number of possible colouring can be obtained by contracting this tensor network by setting vertex tensor elements ``r_v, g_v`` and ``b_v`` to 1.
#
# We construct the tensor network for the 3-coloring problem as
problem = Coloring{3}(graph);

# ## Solving properties