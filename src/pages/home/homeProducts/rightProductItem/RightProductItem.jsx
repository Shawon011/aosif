
// eslint-disable-next-line react/prop-types
function RightProductItem({ productIcon, productTitle, produtDes1, produtDes2, produtDes3, produtDes4, produtDes5 }) {
    return <>
              <div>
                  <div className="w-[230px] productItemBox">
                      <div className="itemTitle relative flex items-center justify-between group">
                          <div className="flex items-center gap-3">
                          <span className="curcale"></span>
                              <span className="group-hover:bg-basered w-[30px] h-[30px] grid place-items-center rounded-[50%]">
                                  {productIcon}
                              </span>
                              <span className="text-[14px] font-bold text-baselightblack">
                                  {productTitle}
                              </span>
                          </div>
                      </div>
                      <div className="pt-6 pb-3 itemDescBox">
                          <div className="itemDesc text-[12px] pt-5 pb-2">
                              <ul className="ml-[36px]">
                                 {
                                  produtDes1 &&
                                  <li>
                                      <a href="#">{produtDes1}</a>
                                  </li>
                                 }
                                 {
                                  produtDes2 && 
                                  <li>
                                      <a href="#">{produtDes2}</a>
                                   </li>
                                 }
                                 {
                                  produtDes3 && 
                                  <li>
                                      <a href="#">{produtDes3}</a>
                                   </li>
                                 }
                                 {
                                  produtDes4 && 
                                  <li>
                                      <a href="#">{produtDes4}</a>
                                   </li>
                                 }
                                 {
                                  produtDes5 && 
                                  <li>
                                      <a href="#">{produtDes5}</a>
                                   </li>
                                 }
                                 
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
    </>
  }
  
  export default RightProductItem