# # Coloring problem

# !!! note
#     It is highly recommended to read the [Independent set problem](@ref) chapter before reading this one.

# ## Problem definition
# A [vertex coloring](https://en.wikipedia.org/wiki/Graph_coloring) is an assignment of labels or colors to each vertex of a graph such that no edge connects two identically colored vertices. 
# In the following, we are going to defined a 3-coloring problem for the Petersen graph.

using GenericTensorNetworks, Graphs

graph = Graphs.smallgraph(:petersen)

# We can visualize this graph using the following function
rot15(a, b, i::Int) = cos(2i*π/5)*a + sin(2i*π/5)*b, cos(2i*π/5)*b - sin(2i*π/5)*a
locations = [[rot15(0.0, 60.0, i) for i=0:4]..., [rot15(0.0, 30, i) for i=0:4]...]
show_graph(graph, locations; format=:svg)

# ## Generic tensor network representation
# We can define the 3-coloring problem with the [`Coloring`](@ref) type as
coloring = Coloring{3}(graph)

# The tensor network representation of the 3-coloring problem can be obtained by
problem = GenericTensorNetwork(coloring)

# ### Theory (can skip)
# Type [`Coloring`](@ref) can be used for constructing the tensor network with optimized contraction order for a coloring problem.
# Let us use 3-coloring problem defined on vertices as an example.
# For a vertex ``v``, we define the degrees of freedom ``c_v\in\{1,2,3\}`` and a vertex tensor labelled by it as
# ```math
# W(v) = \left(\begin{matrix}
#     1\\
#     1\\
#     1
# \end{matrix}\right).
# ```
# For an edge ``(u, v)``, we define an edge tensor as a matrix labelled by ``(c_u, c_v)`` to specify the constraint
# ```math
# B = \left(\begin{matrix}
#     1 & x & x\\
#     x & 1 & x\\
#     x & x & 1
# \end{matrix}\right).
# ```
# The number of possible coloring can be obtained by contracting this tensor network by setting vertex tensor elements ``r_v, g_v`` and ``b_v`` to 1.

# ## Solving properties
# ##### counting all possible coloring
# The size of a coloring problem is the number of violations of the coloring constraint.
num_of_coloring = solve(problem, CountingMin())[]

# ##### finding one best coloring
single_solution = solve(problem, SingleConfigMin())[]
read_config(single_solution)

is_vertex_coloring(graph, read_config(single_solution))

vertex_color_map = Dict(0=>"red", 1=>"green", 2=>"blue")

show_graph(graph, locations; format=:svg, vertex_colors=[vertex_color_map[Int(c)]
     for c in read_config(single_solution)])

# Let us try to solve the same issue on its line graph, a graph that generated by mapping an edge to a vertex and two edges sharing a common vertex will be connected.
linegraph = line_graph(graph)

show_graph(linegraph, [(locations[e.src] .+ locations[e.dst])
     for e in edges(graph)]; format=:svg)

# Let us construct the tensor network and see if there are solutions.
lineproblem = Coloring{3}(linegraph);

num_of_coloring = solve(GenericTensorNetwork(lineproblem), CountingMin())[]
read_size_count(num_of_coloring)

# You will see the maximum size 28 is smaller than the number of edges in the `linegraph`,
# meaning no solution for the 3-coloring on edges of a Petersen graph.
