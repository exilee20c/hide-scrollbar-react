import React, { Component } from "react";
import "./Scrollable.scss";

class Scrollable extends Component {
  state = {
    // 스크롤 썸이 보이는지 여부 ( 스크롤시, 마우스 진입시 1.2초간 노출 )
    is_appear: false,
    scroll_disappear_timing: 0,

    // 스크롤 썸 위치 제어를 위한 scrollTop 수치값 추적
    scroll_top: 0,

    // 리사이즈, 스크롤 등에서 스크롤 너비 높이를 다시 계산하기 위한 증분 (re-render 유도)
    resize_cursor: 0,

    // 드래그앤드롭을 이용한 스크롤링, 스크롤 썸이 눌렸는지 식별
    is_thumb_pressed: false,

    // 맨위 && 맨아래보다 밖으로 갔다가 돌아왔을 때, 스크롤썸에 대한 위치 유지를 위한 값
    // 스크롤이 시작하기 전 스크롤이 어느정도였는지
    thumb_press_origin_scroll_top: 0,

    // 스크롤이 시작된 x 좌표는? > +-100 , 초기 스크롤 복원
    thumb_press_origin_x: 0,

    // 스크롤썸의 어느 좌표에서 클릭되어 드래그가 시작됐는가
    thumb_press_origin_y_of: 0
  };

  scrollChanged = event => {
    if (this.state.scroll_disappear_timing) {
      window.clearTimeout(this.state.scroll_disappear_timing);
    }

    this.setState({
      scroll_top: event.currentTarget.scrollTop,
      is_appear: true,
      resize_cursor: this.state.resize_cursor + 1
    });

    let timeout = window.setTimeout(
      () => this.setState({ is_appear: false }),
      1200
    );

    this.setState({ scroll_disappear_timing: timeout });
  };

  windowSizeChanged = event => {
    this.setState({
      resize_cursor: this.state.resize_cursor + 1
    });
  };

  mouseScrollStart = event => {
    event.stopPropagation();

    // 썸 클릭시 --> 썸의 상대적 위치 기억 후 드래그 대응
    if (
      this.refs.scrollbar_inner ===
      document.elementFromPoint(event.clientX, event.clientY)
    ) {
      this.setState({
        is_thumb_pressed: true,
        thumb_press_origin_scroll_top: this.refs.scrollable_outer.scrollTop,

        thumb_press_origin_x: event.clientX,
        thumb_press_origin_y_of:
          event.clientY - this.refs.scrollbar_inner.getBoundingClientRect().top
      });
    }

    // 바 클릭시 --> 썸의 가운데 위치 기억 후 드래그 대응
    else {
      event.persist();

      this.setState(
        {
          is_thumb_pressed: true,
          thumb_press_origin_scroll_top: this.refs.scrollable_outer.scrollTop,

          thumb_press_origin_x: event.clientX,
          thumb_press_origin_y_of:
            this.refs.scrollbar_inner.getBoundingClientRect().height / 2
        },
        () => this.mouseMove(event)
      );
    }
  };

  mouseScrollEnd = event => {
    this.setState({
      is_thumb_pressed: false,
      thumb_press_origin_scroll_top: this.refs.scrollable_outer.scrollTop,

      thumb_press_origin_x: 0,
      thumb_press_origin_y_of: 0
    });
  };

  mouseMove = event => {
    if (event.buttons && this.state.is_thumb_pressed) {
      if (this.refs) {
        let the_scale_amt =
          this.refs.scrollbar_outer.getBoundingClientRect().height /
          this.refs.scrollbar_inner.getBoundingClientRect().height;

        if (
          this.refs.scrollbar_outer &&
          this.refs.scrollbar_inner &&
          this.refs.scrollable_outer
        ) {
          if (Math.abs(event.clientX - this.state.thumb_press_origin_x) > 100) {
            this.refs.scrollable_outer.scrollTop = this.state.thumb_press_origin_scroll_top;
          } else {
            this.refs.scrollable_outer.scrollTop =
              the_scale_amt *
              (event.clientY -
                this.state.thumb_press_origin_y_of -
                this.refs.scrollbar_outer.getBoundingClientRect().top);
          }
        }
      }
    } else {
      this.mouseScrollEnd(event);
    }
  };

  render() {
    let scrollable_outer_height,
      scrollable_inner_height,
      scrollbar_outer_height,
      scrollbar_inner_height,
      scrollbar_inline_height,
      scrollbar_inline_top;

    if (this.refs) {
      if (this.refs.scrollable_outer) {
        scrollable_outer_height = this.refs.scrollable_outer.getBoundingClientRect()
          .height;
      }
      if (this.refs.scrollable_inner) {
        scrollable_inner_height = this.refs.scrollable_inner.getBoundingClientRect()
          .height;
      }
      if (this.refs.scrollbar_outer) {
        scrollbar_outer_height = this.refs.scrollbar_outer.getBoundingClientRect()
          .height;
      }
      if (this.refs.scrollbar_inner) {
        scrollbar_inner_height = this.refs.scrollbar_inner.getBoundingClientRect()
          .height;
      }
    }

    scrollbar_inline_height =
      scrollable_inner_height > scrollable_outer_height
        ? (scrollable_outer_height / scrollable_inner_height) *
          scrollbar_outer_height
        : scrollbar_outer_height;

    scrollbar_inline_top =
      (scrollbar_outer_height - scrollbar_inline_height) *
      (this.state.scroll_top /
        (scrollable_inner_height - scrollable_outer_height));

    return (
      <section className="exl-scrollable" style={this.props.style}>
        <div
          className="exl-scrollable-container"
          style={this.props.inner_style}
          ref="scrollable_outer"
          onMouseEnter={this.scrollChanged}
          onScroll={this.scrollChanged}
        >
          <div className="exl-scrollable-content" ref="scrollable_inner">
            {this.props.children}
          </div>
        </div>

        <div
          className={`exl-scrollable-scrollbar-wrapper${
            scrollable_inner_height > scrollable_outer_height
              ? this.state.is_appear
                ? " appear"
                : ""
              : " disappear"
          }`}
          ref="scrollbar_outer"
          onMouseDown={this.mouseScrollStart}
        >
          <div
            className="exl-scrollable-scrollbar-thumb"
            ref="scrollbar_inner"
            style={{
              height: `${scrollbar_inline_height}px`,
              top: `${scrollbar_inline_top}px`
            }}
            onMouseDown={this.mouseScrollStart}
          />
        </div>
      </section>
    );
  }

  componentDidMount() {
    window.addEventListener("resize", this.windowSizeChanged);
    window.addEventListener("mousemove", this.mouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.windowSizeChanged);
    window.removeEventListener("mousemove", this.mouseMove);
  }
}

export default Scrollable;
