// (C) Copyright 2016 Hewlett Packard Enterprise Development LP

import React, { PropTypes, Image } from 'react-native';

const IMAGE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAAwNJREFUaAXtmb9qFUEUxhMtbFILSTCljaV2IZIniHYK4b6CjV1sbH0Qi4CF+gqCJETfYRsTIuksRDDq9wt32HMPuzA7OzPehXvg487Zmfm+c3b+7Oze9bU021S3A2FP2Ba25tDP2vkc3/T7SfgoXAj/3e4oghfCifBH+BsJ2tKHvnBUt1tSnAmNEBt0Xzs44IKziu1I5UzoCyj1OpxwF7VdsV8KXUFe6zrz+6WwL9wXNuagvC9QRxvadnHAjUYRey7WX4IX/qlrb4S7QqzRlj709XxooJXVuCtdwb/T9XsjlOgLR1cS2UaCeemnDbvIkZDL4ILTJoLm6DXBzuAXLELPhNwGp08C7VG700wE9q5QznnnRbdgcHs9YkgyHjCNYAmZr6XNr4lGgkkPO56SNnh2jDELVt2jDA2/OxHLYDtVD5sA214tQ8tqc+wYZBzM7IK6lj9knx8k1tEYLTRDEsRCTFHGqj8Q1k3rzyp/N37pIlpoBiMWYooyEnjsWr53fg33gxPxMbnq1iWBrda9KX11fg33ixPxMbnq1u1K4LytrlbymtEJEOEPISwgfje4WNnQtDEQU5QxAnS0Zhe0vV6y7DV9TL3aJHDhaqO3MNdvjOs1fUy93CQwav71Mg+r8HPex9TLRgJ8PbD20DqVyo+cjo/JVbcuCfDaZ+2pdSqVnzgdH5OrXnQnfZQIqXCAstvYpA5zJDH54zQvEY1gR4GXjdKGhtVs5BNLks3Uy5JRPkpiiusEt9cjhmRjR5r0Sz2Z7wiXgr0zvGDkHIlX4oPTalzJRzuL1f6wRSK/hayfb2p9WrSjkD0JRsJPpyDIO+zYj7tMG4IOnEVGgnnpF7YVTC3DCTfTpngS7E5sb42QGnDoBwdccAarkgRiPGB4Yp8KfhcJAXb90pY+9O17SCUn4d+EpBFlHAD59LEnbAuc5wHGWR4M/ZOPJN4Kt4VgrLVD4ThcWPbf5JFYpsRWSSzLaKxGYjUSGe9A33R6kFGjOJVP4nVxxQICIYlJBh/ux8K0+QerB7nPlRs7kwAAAABJRU5ErkJggg==';
const IMAGE_COLORED = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAABC1JREFUaAXtmc9LVFEUxx0hly2Mitq3soLUVtHGwhahEBG0MnBVoJQRBP4BQhCJ6KJVkCsh2iguknIT7cyFJdE/UFQUrQ2yz3e61zlzfDPz3pt5E5IHztx77r3vfM/3/nr33Sl15JDt7e0jPDaA9qNHUdlSydegX0jX0NVSqaSyQqSU1itBd9H2OjqEnk77XGi3QbqELkBmK+OzdZs3JEDgnXgYRm+jx+t6a1z5iSYz6CJEfjdu3rhFXQIEr4Bn0ZONXWVq8Z7W45AQoaakJgGC78PzHNqdgLBN2Tr6Et1E47wnu7MeeshfRHvRJJwflI9B4i1pbkly3EHwl/H4AD3gPGv+zqNPAP7u6hJNfB2iYhQdQbWOrPzCuI+vZVuYJb+LQOj5pzjxwa9QNgXY5ywAsS1+j5GfRAdjWUhF4kbekagiAIjm/HPUT5tpAB4HwKYSMG7iYMI50XS6CkbmNbFDAMfabZ6hfsHexXHuIXaBlk2wNEUfuTot7GtgZdqdFHSUYTI+ePV8S4MXWPA5HYFDKmzFkEnKI0CPaHG9QDWFoqwANB6NIlJwtUXbNaEpdAncrbR4cQT0hrXBy8FUWidNtBOGDVYxKJbUEgn4oZunF3LtNqmRaRgw5t0zQ86ua5YYRh3CXptWekmdw3mqfd48lysLvt4Tb9CdDYX8efBTHQA1AgOolfV2BS/QgLVuAyDvY3LVFVMEzlbMck7Hg3bLKwfoY3LVFVME4jk+lm7GTBtTvQOs+JhsXVU+iUCquVflpXnDY/5fBLTrWLG7gS0vMu8xfUw1sTWFvrnaw85uh+kxfUw1YxCB3POvptfsFX7O+5hqehQB3R5Y6bFGm/L+EOljqhmGCKy5Wn0GtlsuOEAfk6uumCKwWjHLud7wenfFxZgBS9/NVnxMtq4q3xnOHBumVDvCqLGLzgrL7kIbac9BCkwjIFn6m+z8jtAz+oYtVAKGPvat+Fhs3a58JLBAjT4monSRmYxGgakwhBVFMSiW1FImwJDpo0I3ZlYG6SF9gBciwfegcz4TYnHFtc04AmqxiPpD1QRA+gBvqQSf/mZC2Iohk9jFowstfdIVfa1yC4w7Lsqf2FfofU2hTGJHQB8XcjCG6rLJikZiFs29sPWsfODUBy+cg+gZZbJK1QjEhwHStGnH1WKEVKr7oHt04rItbJRPJKCHINFHMod2y3bSistdTRv1vJ0FmUnUJKCAIaE1oWH3ZxVVNyNasLpz0rR5iOYmUZcAjkVCznXtUsgfHGG65ibRkIBISADqItGlk8icQrPIOxpri0z8i6kZEqkJ2GgB1Pl9AO1HW/InXzMkbGz/NC8S6Af0o1HZLX+ZFkZUwaL7JArr4bSO90cibU8V3a7RSOTaRosO2vsXCcqSXnZ6J+0NSRgJHUX2lhgSey/42NWQOBHzSv8AWpXjFrhqNjsAAAAASUVORK5CYII=';

export default Search = (props) => (
  <Image source={{uri: (props.colored ? IMAGE_COLORED : IMAGE), scale: 2}}
    style={{width: 24, height: 24}} />
);

Search.propTypes = {
  colored: PropTypes.bool
};
