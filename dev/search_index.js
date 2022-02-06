var documenterSearchIndex = {"docs":
[{"location":"tutorials/MaxCut/","page":"Max-Cut Problem","title":"Max-Cut Problem","text":"EditURL = \"https://github.com/Happy-Diode/GraphTensorNetworks.jl/blob/master/examples/MaxCut/main.jl\"","category":"page"},{"location":"tutorials/MaxCut/#Max-Cut-problem","page":"Max-Cut Problem","title":"Max-Cut problem","text":"","category":"section"},{"location":"tutorials/MaxCut/#Problem-definition","page":"Max-Cut Problem","title":"Problem definition","text":"","category":"section"},{"location":"tutorials/MaxCut/#Solving-properties","page":"Max-Cut Problem","title":"Solving properties","text":"","category":"section"},{"location":"tutorials/MaxCut/","page":"Max-Cut Problem","title":"Max-Cut Problem","text":"using GraphTensorNetworks, Graphs","category":"page"},{"location":"tutorials/MaxCut/","page":"Max-Cut Problem","title":"Max-Cut Problem","text":"","category":"page"},{"location":"tutorials/MaxCut/","page":"Max-Cut Problem","title":"Max-Cut Problem","text":"This page was generated using Literate.jl.","category":"page"},{"location":"methodselection/","page":"Method Selection Guide","title":"Method Selection Guide","text":"CurrentModule = GraphTensorNetworks","category":"page"},{"location":"methodselection/#Method-Selection-Guide","page":"Method Selection Guide","title":"Method Selection Guide","text":"","category":"section"},{"location":"methodselection/#Tensor-network-contraction-tree-optimizer","page":"Method Selection Guide","title":"Tensor network contraction tree optimizer","text":"","category":"section"},{"location":"methodselection/#Independence-polynomial","page":"Method Selection Guide","title":"Independence polynomial","text":"","category":"section"},{"location":"methodselection/#Configuration-enumeration","page":"Method Selection Guide","title":"Configuration enumeration","text":"","category":"section"},{"location":"tutorials/IndependentSet/","page":"Independent Set Problem","title":"Independent Set Problem","text":"EditURL = \"https://github.com/Happy-Diode/GraphTensorNetworks.jl/blob/master/examples/IndependentSet/main.jl\"","category":"page"},{"location":"tutorials/IndependentSet/#Independent-set-problem","page":"Independent Set Problem","title":"Independent set problem","text":"","category":"section"},{"location":"tutorials/IndependentSet/#Problem-definition","page":"Independent Set Problem","title":"Problem definition","text":"","category":"section"},{"location":"tutorials/IndependentSet/","page":"Independent Set Problem","title":"Independent Set Problem","text":"An independent set is defined in the monadic second order language as","category":"page"},{"location":"tutorials/IndependentSet/","page":"Independent Set Problem","title":"Independent Set Problem","text":"exists x_ildotsx_Mleftbigwedge_ineq j (x_ineq x_j wedge neg textbfadj(x_i x_j))right","category":"page"},{"location":"tutorials/IndependentSet/#Solving-properties","page":"Independent Set Problem","title":"Solving properties","text":"","category":"section"},{"location":"tutorials/IndependentSet/","page":"Independent Set Problem","title":"Independent Set Problem","text":"using GraphTensorNetworks, Graphs\n\ngraph = Graphs.smallgraph(:petersen)\n\nproblem = Independence(graph; optimizer=TreeSA(sc_weight=1.0, ntrials=10,\n                         βs=0.01:0.1:15.0, niters=20, rw_weight=0.2));\nnothing #hide","category":"page"},{"location":"tutorials/IndependentSet/","page":"Independent Set Problem","title":"Independent Set Problem","text":"maximum independent set size","category":"page"},{"location":"tutorials/IndependentSet/","page":"Independent Set Problem","title":"Independent Set Problem","text":"maximum_independent_set_size = solve(problem, \"size max\")","category":"page"},{"location":"tutorials/IndependentSet/","page":"Independent Set Problem","title":"Independent Set Problem","text":"all independent sets","category":"page"},{"location":"tutorials/IndependentSet/","page":"Independent Set Problem","title":"Independent Set Problem","text":"count_all_independent_sets = solve(problem, \"counting sum\")","category":"page"},{"location":"tutorials/IndependentSet/","page":"Independent Set Problem","title":"Independent Set Problem","text":"counting maximum independent sets","category":"page"},{"location":"tutorials/IndependentSet/","page":"Independent Set Problem","title":"Independent Set Problem","text":"count_maximum_independent_sets = solve(problem, \"counting max\")","category":"page"},{"location":"tutorials/IndependentSet/","page":"Independent Set Problem","title":"Independent Set Problem","text":"counting independent sets of max two sizes","category":"page"},{"location":"tutorials/IndependentSet/","page":"Independent Set Problem","title":"Independent Set Problem","text":"count_max2_independent_sets = solve(problem, \"counting max2\")","category":"page"},{"location":"tutorials/IndependentSet/","page":"Independent Set Problem","title":"Independent Set Problem","text":"compute the independence polynomial","category":"page"},{"location":"tutorials/IndependentSet/","page":"Independent Set Problem","title":"Independent Set Problem","text":"independence_polynomial = solve(problem, \"counting all (finitefield)\")","category":"page"},{"location":"tutorials/IndependentSet/","page":"Independent Set Problem","title":"Independent Set Problem","text":"find one MIS","category":"page"},{"location":"tutorials/IndependentSet/","page":"Independent Set Problem","title":"Independent Set Problem","text":"max_config = solve(problem, \"config max\")","category":"page"},{"location":"tutorials/IndependentSet/","page":"Independent Set Problem","title":"Independent Set Problem","text":"enumerate all MISs","category":"page"},{"location":"tutorials/IndependentSet/","page":"Independent Set Problem","title":"Independent Set Problem","text":"all_max_configs = solve(problem, \"configs max (bounded)\")","category":"page"},{"location":"tutorials/IndependentSet/","page":"Independent Set Problem","title":"Independent Set Problem","text":"enumerate all IS configurations","category":"page"},{"location":"tutorials/IndependentSet/","page":"Independent Set Problem","title":"Independent Set Problem","text":"all_independent_sets = solve(problem, \"configs all\")","category":"page"},{"location":"tutorials/IndependentSet/","page":"Independent Set Problem","title":"Independent Set Problem","text":"","category":"page"},{"location":"tutorials/IndependentSet/","page":"Independent Set Problem","title":"Independent Set Problem","text":"This page was generated using Literate.jl.","category":"page"},{"location":"tutorials/Others/","page":"Other Problems","title":"Other Problems","text":"EditURL = \"https://github.com/Happy-Diode/GraphTensorNetworks.jl/blob/master/examples/Others/main.jl\"","category":"page"},{"location":"tutorials/Others/#Other-problems-can-be-solved-by-GraphTensorNetworks","page":"Other Problems","title":"Other problems can be solved by GraphTensorNetworks","text":"","category":"section"},{"location":"tutorials/Others/#Set-packing-problem","page":"Other Problems","title":"Set packing problem","text":"","category":"section"},{"location":"tutorials/Others/","page":"Other Problems","title":"Other Problems","text":"It is a generalization of the independent set problem.","category":"page"},{"location":"tutorials/Others/#Vertex-cover-problem","page":"Other Problems","title":"Vertex cover problem","text":"","category":"section"},{"location":"tutorials/Others/","page":"Other Problems","title":"Other Problems","text":"A vertex cover is a complement of an independent set.","category":"page"},{"location":"tutorials/Others/#Maximal-clique-problem","page":"Other Problems","title":"Maximal clique problem","text":"","category":"section"},{"location":"tutorials/Others/","page":"Other Problems","title":"Other Problems","text":"The maximal clique of graph G is a maximal clique of G's complement graph.","category":"page"},{"location":"tutorials/Others/#Spin-glass-problem","page":"Other Problems","title":"Spin-glass problem","text":"","category":"section"},{"location":"tutorials/Others/","page":"Other Problems","title":"Other Problems","text":"It is another way of saying the Max-Cut problem.","category":"page"},{"location":"tutorials/Others/","page":"Other Problems","title":"Other Problems","text":"","category":"page"},{"location":"tutorials/Others/","page":"Other Problems","title":"Other Problems","text":"This page was generated using Literate.jl.","category":"page"},{"location":"ref/#References","page":"References","title":"References","text":"","category":"section"},{"location":"ref/","page":"References","title":"References","text":"Modules = [GraphTensorNetworks]","category":"page"},{"location":"ref/#GraphTensorNetworks.Coloring","page":"References","title":"GraphTensorNetworks.Coloring","text":"Coloring{K,CT<:EinTypes} <: GraphProblem\nColoring{K}(graph; openvertices=(), optimizer=GreedyMethod(), simplifier=nothing)\n\nK-Coloring problem. optimizer and simplifier are for tensor network optimization, check optimize_code for details.\n\n\n\n\n\n","category":"type"},{"location":"ref/#GraphTensorNetworks.Independence","page":"References","title":"GraphTensorNetworks.Independence","text":"Independence{CT<:EinTypes,WT<:Union{UnWeighted, Vector}} <: GraphProblem\nIndependence(graph; weights=UnWeighted(), openvertices=(), optimizer=GreedyMethod(), simplifier=nothing)\n\nIndependent set problem. In the constructor, weights are the weights of vertices. openvertices specifies labels for the output tensor. optimizer and simplifier are for tensor network optimization, check optimize_code for details.\n\n\n\n\n\n","category":"type"},{"location":"ref/#GraphTensorNetworks.Matching","page":"References","title":"GraphTensorNetworks.Matching","text":"Matching{CT<:EinTypes} <: GraphProblem\nMatching(graph; openvertices=(), optimizer=GreedyMethod(), simplifier=nothing)\n\nVertex matching problem. optimizer and simplifier are for tensor network optimization, check optimize_code for details. The matching polynomial adopts the first definition in wiki page: https://en.wikipedia.org/wiki/Matching_polynomial\n\nm_G(x) = sum_kgeq 0m_kx^k\n\nwhere m_k is the number of k-edge matchings.\n\n\n\n\n\n","category":"type"},{"location":"ref/#GraphTensorNetworks.MaxCut","page":"References","title":"GraphTensorNetworks.MaxCut","text":"MaxCut{CT<:EinTypes,WT<:Union{UnWeighted, Vector}} <: GraphProblem\nMaxCut(graph; weights=UnWeighted(), openvertices=(), optimizer=GreedyMethod(), simplifier=nothing)\n\nMax cut problem (or spin glass problem). In the constructor, weights are the weights of edges. optimizer and simplifier are for tensor network optimization, check optimize_code for details.\n\n\n\n\n\n","category":"type"},{"location":"ref/#GraphTensorNetworks.MaximalIndependence","page":"References","title":"GraphTensorNetworks.MaximalIndependence","text":"MaximalIndependence{CT<:EinTypes,WT<:Union{UnWeighted, Vector}} <: GraphProblem\nMaximalIndependence(graph; weights=UnWeighted(), openvertices=(), optimizer=GreedyMethod(), simplifier=nothing)\n\nMaximal independent set problem. In the constructor, weights are the weights of vertices. optimizer and simplifier are for tensor network optimization, check optimize_code for details.\n\n\n\n\n\n","category":"type"},{"location":"ref/#GraphTensorNetworks.PaintShop","page":"References","title":"GraphTensorNetworks.PaintShop","text":"PaintShop{CT<:EinTypes} <: GraphProblem\nPaintShop(labels::AbstractVector; openvertices=(), optimizer=GreedyMethod(), simplifier=nothing)\n\nThe binary paint shop problem: http://m-hikari.com/ams/ams-2012/ams-93-96-2012/popovAMS93-96-2012-2.pdf.\n\nExample\n\nOne can encode the paint shop problem abaccb as the following\n\njulia> symbols = collect(\"abaccb\");\n\njulia> pb = PaintShop(symbols);\n\njulia> solve(pb, SizeMax())[]\n3.0ₜ\n\njulia> solve(pb, ConfigsMax())[].c.data\n2-element Vector{StaticBitVector{5, 1}}:\n 01101\n 01101\n\nIn our definition, we find the maximum number of unchanged color in this sequence, i.e. (n-1) - (minimum number of color changes) In the output of maximum configurations, the two configurations are defined on 5 bonds i.e. pairs of (i, i+1), 0 means color changed, while 1 means color not changed. If we denote two \"colors\" as r and b, then the optimal painting is rbbbrr or brrrbb, both change the colors twice.\n\n\n\n\n\n","category":"type"},{"location":"ref/#GraphTensorNetworks.StaticElementVector","page":"References","title":"GraphTensorNetworks.StaticElementVector","text":"StaticElementVector{N,S,C}\n\nN is the length of vector, C is the size of storage in unit of UInt64, S is the stride defined as the log2(# of flavors). When the number of flavors is 2, it is a StaticBitVector.\n\n\n\n\n\n","category":"type"},{"location":"ref/#GraphTensorNetworks.all_solutions-Tuple{GraphTensorNetworks.GraphProblem}","page":"References","title":"GraphTensorNetworks.all_solutions","text":"all_solutions(problem)\n\nFinding all solutions. e.g. when the problem is MaximalIndependence, it computes all maximal independent sets, or the maximal cliques of it complement.\n\n\n\n\n\n","category":"method"},{"location":"ref/#GraphTensorNetworks.backward_tropical-Tuple{Any, Any, Tuple, Any, Any, Any, Any}","page":"References","title":"GraphTensorNetworks.backward_tropical","text":"backward_tropical(mode, ixs, xs, iy, y, ymask, size_dict)\n\nThe backward rule for tropical einsum.\n\nmode can be one of :all and :single,\nixs and xs are labels and tensor data for input tensors,\niy and y are labels and tensor data for the output tensor,\nymask is the boolean mask for gradients,\nsize_dict is a key-value map from tensor label to dimension size.\n\n\n\n\n\n","category":"method"},{"location":"ref/#GraphTensorNetworks.best2_solutions-Tuple{GraphTensorNetworks.GraphProblem}","page":"References","title":"GraphTensorNetworks.best2_solutions","text":"best2_solutions(problem; all=true, usecuda=false)\n\nFinding optimal and suboptimal solutions.\n\n\n\n\n\n","category":"method"},{"location":"ref/#GraphTensorNetworks.best_solutions-Tuple{GraphTensorNetworks.GraphProblem}","page":"References","title":"GraphTensorNetworks.best_solutions","text":"best_solutions(problem; all=false, usecuda=false)\n\nFind optimal solutions with bounding.\n\nWhen all is true, the program will use set for enumerate all possible solutions, otherwise, it will return one solution for each size.\nusecuda can not be true if you want to use set to enumerate all possible solutions.\n\n\n\n\n\n","category":"method"},{"location":"ref/#GraphTensorNetworks.bounding_contract-Tuple{AllConfigs, OMEinsum.EinCode, Any, Any, Any}","page":"References","title":"GraphTensorNetworks.bounding_contract","text":"bounding_contract(mode, code, xsa, ymask, xsb; size_info=nothing)\n\nContraction method with bounding.\n\n* `mode` is a `AllConfigs{K}` instance, where `MIS-K+1` is the largest IS size that you care about.\n* `xsa` are input tensors for bounding, e.g. tropical tensors,\n* `xsb` are input tensors for computing, e.g. tensors elements are counting tropical with set algebra,\n* `ymask` is the initial gradient mask for the output tensor.\n\n\n\n\n\n","category":"method"},{"location":"ref/#GraphTensorNetworks.graph_polynomial","page":"References","title":"GraphTensorNetworks.graph_polynomial","text":"graph_polynomial(problem, method; usecuda=false, kwargs...)\n\nComputing the graph polynomial for specific problem.\n\nproblem can be one of the following instances,\nIndependence for the independence polynomial,\nMaximalIndependence for the maximal independence polynomial,\nMatching for the matching polynomial,\nmethod can be one of the following inputs,\nVal(:finitefield), compute exactly with the finite field method.   It consumes additional kwargs [max_iter, maxorder], where maxorder is maximum order of polynomial   and max_iter is the maximum number of primes numbers to use in the finitefield algebra.   max_iter can be determined automatically in most cases.\nVal(:polynomial), compute directly with Polynomial number type,\nVal(:fft), compute with the fast fourier transformation approach, fast but needs to tune the hyperparameter r.   It Consumes additional kwargs [maxorder, r]. The larger r is,   the more accurate the factors of high order terms, and the less accurate the factors of low order terms.\nVal(:fitting), compute with the polynomial fitting approach, fast but inaccurate for large graphs.\n\n\n\n\n\n","category":"function"},{"location":"ref/#GraphTensorNetworks.labels-Tuple{Union{OMEinsum.EinCode, OMEinsum.NestedEinsum, OMEinsumContractionOrders.SlicedEinsum}}","page":"References","title":"GraphTensorNetworks.labels","text":"labels(code)\n\nReturn a vector of unique labels in an Einsum token.\n\n\n\n\n\n","category":"method"},{"location":"ref/#GraphTensorNetworks.load_configs-Tuple{Any}","page":"References","title":"GraphTensorNetworks.load_configs","text":"load_configs(filename; format=:binary, bitlength=nothing, nflavors=2)\n\nLoad configurations from file filename. The format is :binary or :text. If the format is :binary, the bitstring length bitlength must be specified, nflavors specifies the degree of freedom.\n\n\n\n\n\n","category":"method"},{"location":"ref/#GraphTensorNetworks.mis_compactify!-Union{Tuple{AbstractArray{T}}, Tuple{T}} where T<:(TropicalNumbers.TropicalTypes)","page":"References","title":"GraphTensorNetworks.mis_compactify!","text":"mis_compactify!(tropicaltensor)\n\nCompactify tropical tensor for maximum independent set problem. It will eliminate some entries by setting them to zero, by the criteria that even these entries are removed, the MIS size is not changed.\n\n\n\n\n\n","category":"method"},{"location":"ref/#GraphTensorNetworks.save_configs-Union{Tuple{C}, Tuple{S}, Tuple{N}, Tuple{Any, ConfigEnumerator{N, S, C}}} where {N, S, C}","page":"References","title":"GraphTensorNetworks.save_configs","text":"save_configs(filename, data::ConfigEnumerator; format=:binary)\n\nSave configurations data to file filename. The format is :binary or :text.\n\n\n\n\n\n","category":"method"},{"location":"ref/#GraphTensorNetworks.set_packing-Tuple{Any}","page":"References","title":"GraphTensorNetworks.set_packing","text":"set_packing(sets; openvertices=(), optimizer=GreedyMethod(), simplifier=nothing)\n\nSet packing is a generalization of independent set problem to hypergraphs. Calling this function will return you an Independence instance. sets are a vector of vectors, each element being a vertex in the independent set problem. optimizer and simplifier are for tensor network optimization, check optimize_code for details.\n\nExample\n\njulia> sets = [[1, 2, 5], [1, 3], [2, 4], [3, 6], [2, 3, 6]];  # each set is a vertex\n\njulia> gp = set_packing(sets);\n\njulia> res = best_solutions(gp; all=true)[]\n(2, {10010, 00110, 01100})ₜ\n\n\n\n\n\n","category":"method"},{"location":"ref/#GraphTensorNetworks.solutions-Union{Tuple{BT}, Tuple{GraphTensorNetworks.GraphProblem, Type{BT}}} where BT","page":"References","title":"GraphTensorNetworks.solutions","text":"solutions(problem, basetype; all, usecuda=false)\n\nGeneral routine to find solutions without bounding,\n\nbasetype can be a type with counting field,\nCountingTropical{Float64,Float64} for finding optimal solutions,\nPolynomial{Float64, :x} for enumerating all solutions,\nMax2Poly{Float64,Float64} for optimal and suboptimal solutions.\nWhen all is true, the program will use set for enumerate all possible solutions, otherwise, it will return one solution for each size.\nusecuda can not be true if you want to use set to enumerate all possible solutions.\n\n\n\n\n\n","category":"method"},{"location":"ref/#GraphTensorNetworks.solve-Tuple{GraphTensorNetworks.GraphProblem, GraphTensorNetworks.AbstractProperty}","page":"References","title":"GraphTensorNetworks.solve","text":"solve(problem, task; usecuda=false)\n\nproblem is the graph problem with tensor network information,\ntask is string specifying the task. Using the maximum independent set problem as an example, it can be one of\n\"size max\", the maximum independent set size,\n\"counting sum\", total number of independent sets,\n\"counting max\", the dengeneracy of maximum independent sets (MIS),\n\"counting max2\", the dengeneracy of MIS and MIS-1,\n\"counting all\", independence polynomial, the polynomial number approach,\n\"counting all (fft)\", independence polynomial, the fourier transformation approach,\n\"counting all (finitefield)\", independence polynomial, the finite field approach,\n\"config max\", one of the maximum independent set,\n\"config max (bounded)\", one of the maximum independent set, the bounded version,\n\"configs max\", all MIS configurations,\n\"configs max2\", all MIS configurations and MIS-1 configurations,\n\"configs all\", all IS configurations,\n\"configs max (bounded)\", all MIS configurations, the bounded approach (much faster),\n\"configs max2 (bounded)\", all MIS and MIS-1 configurations, the bounded approach (much faster),\n\"configs max3 (bounded)\", all MIS, MIS-1 and MIS-2 configurations, the bounded approach (much faster),\n\n\n\n\n\n","category":"method"},{"location":"ref/#GraphTensorNetworks.@bv_str-Tuple{Any}","page":"References","title":"GraphTensorNetworks.@bv_str","text":"Constructing a static bit vector.\n\n\n\n\n\n","category":"macro"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = GraphTensorNetworks","category":"page"},{"location":"#GraphTensorNetworks","page":"Home","title":"GraphTensorNetworks","text":"","category":"section"},{"location":"#Background-knowledge","page":"Home","title":"Background knowledge","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Please check our paper \"Computing properties of independent sets by generic programming tensor networks\". If you find our paper or software useful in your work, please cite us.","category":"page"},{"location":"#Quick-start","page":"Home","title":"Quick start","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"You can find a good installation guide and a quick start in our README.","category":"page"}]
}
