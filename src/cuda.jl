using .CUDA
using TropicalGEMM: XTranspose, NativeTypes, Tropical, TropicalTypes
using LinearAlgebra

function onehotmask(A::CuArray{T}, X::CuArray{T}) where T
    mask = X .== inv.(A)
    ci = argmax(mask)
    mask .= false
    mask[CuArray([ci])] = true
    return mask
end

# fix the matrix multiplication ambiguity
const CTranspose{T} = Transpose{T, <:StridedCuVecOrMat{T}}
for TT in [:(Tropical{<:NativeTypes}), :TropicalTypes]
   for RT in [TT, :Real]
       for (TA, CTA) in [(:CuMatrix, :CuMatrix), (:CTranspose, :(Transpose{<:Any, <:StridedCuVecOrMat}))]
           for (TB, CTB) in [(:CuMatrix, :CuMatrix), (:CTranspose, :(Transpose{<:Any, <:StridedCuVecOrMat}))]
               @eval function LinearAlgebra.mul!(o::CuMatrix{T}, a::$TA{T}, b::$TB{T}, α::$RT, β::$RT) where {T<:$TT}
                   CUDA.CUBLAS.gemm_dispatch!(o, a, b, α, β)
               end
           end
       end
   end
end

<<<<<<< HEAD
=======
using .CUDA: @cartesianidx, AbstractGPUArray, gpu_call

@inline @generated function map_index(dest, src, I, perm::NTuple{N,T}) where {N,T}
    Expr(:(=), Expr(:ref, :dest, [:(@inbounds I[perm[$i]]) for i in 1:N]...), Expr(:ref, :src, :I))
end
function LinearAlgebra.permutedims!(dest::AbstractGPUArray, src::AbstractGPUArray,
                                    perm::NTuple)
    Base.checkdims_perm(dest, src, perm)
    function permutedims_kernel(ctx, dest, src, perm)
        I = @cartesianidx src
        map_index(dest, src, I, perm)
        return
    end
    gpu_call(permutedims_kernel, dest, src, perm)
    return dest
end
>>>>>>> 22e8c5179a33a94ddc43baa995933d109050d502
